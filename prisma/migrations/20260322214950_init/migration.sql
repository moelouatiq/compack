-- CreateTable
CREATE TABLE "Reservation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "domeType" TEXT NOT NULL,
    "domeLabel" TEXT NOT NULL,
    "arrival" TEXT NOT NULL,
    "departure" TEXT NOT NULL,
    "nights" INTEGER NOT NULL,
    "persons" INTEGER NOT NULL,
    "packageType" TEXT NOT NULL,
    "packageLabel" TEXT NOT NULL,
    "totalPrice" REAL NOT NULL,
    "message" TEXT,
    "status" TEXT NOT NULL DEFAULT 'en_attente',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
