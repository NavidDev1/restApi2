# restApi2
Simple rest api with CRUD

Kör npm Install 
kör nodemon server.js för att starta servern

detta är rest api som kommer checka för olika mobiler i en "databas" som består av json fil som heter products.json. vi parsar filen med hjälp av json så att vi sedan med hjälp av endpoints kan få fram den informationen som vi söker.

vi har två app.get varpå den första hämtar alla mobiler och den andra hämtar en specifik modell som vi anger med hjälp av :id.

app.post använder en loop med if sats som kollar igenom productlist för att på sätt hitta hur många produkter finns assigna en ny ID till det vi postar in, som i detta fall blir längst ner i listan.

app.put liknar post men här deklarerar vi en variabel och sätter den till falks som vid en match med id vi satt in blir true och på så sätt ersätter produkten från produktlistan.

app.delete fungerar ungefär som put med req.params.productId som med hjälp av splice metoden tar bort den produkten som vi anget med hjälp av id.

Det finns en rest fil i prohektet för att testa detta.
