// in model we always use class based approach because it gives us some benefits for more read in repository level

import {Entity,PrimaryGeneratedColumn,Column,OneToMany,CreateDateColumn,UpdateDateColumn} from 'typeorm';

// Assuming you have an Airport entity related to the City
// import { Airport } from './Airport';

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column( { nullable: false } )
  name: string;

  @Column({ nullable: false })
  country: string;

  @Column({ nullable: false })
  pincode: number;

  // A city can have many airports (One-to-Many relationship)
  // @OneToMany(() => Airport, (airport) => airport.city)
  // airports: Airport[];

  // Timestamps for created and updated times
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}


// npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate -n CityTable -d src/config/dataSource.ts
// npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run -d src/config/dataSource.ts