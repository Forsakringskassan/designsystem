---
title: Längdvalidering
layout: pattern
---

Du måste använda längdvalidering på fritextfält. Det kan göras på två sätt och ibland är det bra att ha båda sätten på ett fritextfält.

## Med validator

Längdvalidering kan sättas genom att använda validatorn för maxlängd, `v-validation.maxLength="{maxLength:: {length:<maxlängd>}}"`. Då kommer användaren få ett felmeddelande när hen lämnar fritextfältet om det är för många tecken. Några av de andra validatorerna som till exempel {@link validatorer organisationsnummer} och {@link validatorer telefonnummer} har maxlängd inbyggt som en del av valideringskriterierna.

## Med atttribut

Längdvalidering kan också sättas genom att använda attributet `maxlength`. I det här fallet får användaren inte ett felmeddelande, men när max antal tecken har uppnåtts kan användaren inte skriva in fler. Det gäller också om användaren klistrar in för många tecken, då kommer de tecken som överskriver värdet klippas bort.

## Specialiserade inmatningsfält

För de {@link inmatningsfalt-specialiserade specialiserade inmatningsfälten}, till exempel personnummer och mejladress, finns redan begränsande längdvalidering och du behöver inte lägga till något. De flesta specialiserade inmatningsfälten har både en längdvalidering genom en validator och dessutom attributet `maxlength`.

## Relaterat

{@link about-validation Om validering}

{@link inmatningsfalt Inmatningsfält}

{@link inmatningsfalt-specialiserade Specialiserade inmatningsfalt}

{@link validering Validering och felhantering}
