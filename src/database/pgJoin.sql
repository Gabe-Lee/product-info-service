DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    miniDescription TEXT NOT NULL,
    price REAL NOT NULL,
    dealLen TEXT,
    regPrice TEXT,
    reviewAvg REAL NOT NULL,
    reviewCount INTEGER NOT NULL,
    benefit TEXT NULL,
    size TEXT NULL,
    color TEXT NULL,
    mattress TEXT NULL,
    legs TEXT NULL,
    slattedBedBase TEXT NULL,
    ikeaFamilySale BOOLEAN NOT NULL,
    onSale BOOLEAN NOT NULL,
    new BOOLEAN NOT NULL,
    notQuitePerfect BOOLEAN NOT NULL,
    avaliableForDelivery BOOLEAN NOT NULL,
    assembly BOOLEAN NOT NULL,
    soldSeparate TEXT NULL
);
