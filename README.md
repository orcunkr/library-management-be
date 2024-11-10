# library-management-be

node index.js to compile the project

using postgreSql with a db that named: library_management
should create the db first

for datas run inserts below this on postgre terminal;


--- Users
INSERT INTO "Users" ("name", "email") VALUES
('Eray Aslan', 'eray.aslan@example.com'),
('Enes Faruk Meniz', 'enes.meniz@example.com'),
('Sefa Eren Şahin', 'sefa.sahin@example.com'),
('Kadir Mutlu', 'kadir.mutlu@example.com'),
('Ali Can Yılmaz', 'ali.yilmaz@example.com'),
('Berkay Özdemir', 'berkay.ozdemir@example.com'),
('Fatma Kaya', 'fatma.kaya@example.com'),
('Aylin Yılmaz', 'aylin.yilmaz@example.com'),
('Okan Sedef', 'okan.sedef@example.com'),
('Mehmet Duru', 'mehmet.duru@example.com'),
('Zeynep Güzel', 'zeynep.guzel@example.com'),
('Murat Kızıl', 'murat.kizil@example.com'),
('Cem Şahin', 'cem.sahin@example.com'),
('Ebru Aydın', 'ebru.aydin@example.com'),
('Mustafa Sarp', 'mustafa.sarp@example.com');

-- Books
INSERT INTO "Books" ("name", "score", "createdAt", "updatedAt") VALUES
('The Hitchhikers Guide to the Galaxy', 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('I, Robot', 8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Dune', 9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('1984', 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Brave New World', 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Fahrenheit 451', 8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('The Great Gatsby', 9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('To Kill a Mockingbird', 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('The Catcher in the Rye', 8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('1984', 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Animal Farm', 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Neuromancer', 9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Snow Crash', 8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('The Matrix', 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('The Lord of the Rings', 9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


