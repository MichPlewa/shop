import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Tag } from '../../products/db/tag.entity';
import { faker } from '@faker-js/faker';

export class InitData1663083087528 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    this.saveTags();
    this.saveProducts(await this.saveTags());
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner): Promise<void> {}

  private async saveTags(): Promise<Tag[]> {
    const tagsArr: Tag[] = [];
    const tags = [
      {
        name: 'NEW',
      },
      {
        name: 'PROMO',
      },
      {
        name: 'LAST_ITEMS',
      },
    ];

    for (const tag of tags) {
      const tagToSave = new Tag();
      tagToSave.name = tag.name;
      tagsArr.push(await getRepository('Tag').save(tagToSave));
    }

    console.log('Tags saved');

    return tagsArr;
  }

  private async saveProducts(tags: Tag[]): Promise<void> {
    const products = [];
    for (let i = 0; i < 10; i++) {
      const product = {
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        count: faker.datatype.number(100),
        description: faker.lorem.paragraph(),
        tags: [tags[0], tags[1]],
        createdAt: faker.date.past(),
        updatedAt: faker.date.past(),
      };
      products.push(product);
    }

    await getRepository('Product').save(products);
    console.log('Products saved');
  }
}
