-- CreateTable
CREATE TABLE "Reservation" (
    "id" SERIAL NOT NULL,
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
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "message" TEXT,
    "status" TEXT NOT NULL DEFAULT 'en_attente',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);
