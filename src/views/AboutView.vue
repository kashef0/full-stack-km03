<template>
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <!-- Header Section -->
      <header class="text-center mb-6">
        <h1 class="text-4xl font-bold text-white rounded p-5 bg-slate-700">Mina tankar om Vue.js</h1>
        <p class="text-lg text-gray-600">En kort beskrivning om min upplevelse med Vue.js</p>
        <p class="text-lg text-gray-600">
            När jag började använda Vue.js blev jag imponerad av hur enkelt det var att komma igång,
            men också av hur kraftfullt och flexibelt det är. Vue.js är ett modernt ramverk för att bygga dynamiska webbapplikationer och ger mycket frihet samtidigt som det håller saker och ting organiserade och lättförståeliga.
        </p>
      </header>
  
      <!-- Main Content Section -->
      <section>
        <h2 class="text-3xl font-semibold text-gray-800 mb-4">Vad jag tycker har fungerat bra:</h2>
        <ul class="list-disc pl-5 space-y-3 text-lg text-gray-700">
          <li>Enkelhet i grunderna</li>
          <p>
            Vue.js är väldigt lätt att förstå när man först lär sig det. Man kan snabbt få en känsla för hur data binds till gränssnittet och hur man skapar komponenter som återanvänds. Det är en bra ingång för både nybörjare och erfarna utvecklare.
          </p>
          <li>Modulärt system</li>
          <p>
            En av de bästa sakerna med Vue är hur det bygger på komponenter. Man kan skapa små, återanvändbara bitar av kod som kan sättas samman för att skapa en applikation. Detta gör att man kan jobba på olika delar av projektet utan att påverka andra delar, vilket känns väldigt organiserat.
          </p>
          <li>Flexibilitet</li>
          <p>
            Ett bra exempel på Vue:s flexibilitet är hur man kan börja med grundläggande funktioner och sedan lägga till fler avancerade funktioner som pinia eller Vue Router när man behöver det. På så sätt slipper man en brant inlärningskurva och kan bygga upp sin kunskap i takt med att applikationen växer.
          </p>
          <li>Bra resurser och bibliotek</li>
        <p>
            Vue har ett stort bibliotek och verktyg som gör det enkelt att bygga mer komplexa funktioner. Det finns många tillgängliga lösningar för olika behov, vilket gör det enklare att skapa en komplett och fungerande applikation.
        </p>
        </ul>
  
        <h2 class="text-3xl font-semibold text-gray-800 mb-4 mt-8">Vad som varit utmanande:</h2>
        <ul class="list-disc pl-5 space-y-3 text-lg text-gray-700">
          <li>Behandling av större applikationer</li>
          <p>
            Över tid, när applikationen blir större, kan det bli en utmaning att manövrera data effektivt och spårbart. För att lösa detta skapade Vue en egen metod som heter pinia och use-value -biblioteket. För att vara ärlig var det ganska svårt för mig att förstå hur det fungerar och hur jag exakt ska använda det.
          </p>
          <li>Prestanda och optimering</li>
          <p>
            Det kan vara svårt att snabbt få en uppfattning om prestanda om man arbetar med stora datamängder eller många komponenter. Vue-systemet är väldigt reaktivt, det betyder att servern sätts under kontinuerlig press. Det betyder att det kan ta lite tid att faktiskt få allting att fungera smidigt.
          </p>
          <li>Avancerade koncept</li>
          <p>
            Det var några gånger som jag stötte på egenskaper såsom mixins och directives, och jag kände dokumentationen inte var särskilt kategorisering vad de var och när man skulle använda dem. Eftersom jag var nybörjare, behövde jag längre tid för att förstå vad de var..
          </p>
        </ul>
  
        <h2 class="text-3xl font-semibold text-gray-800 mb-4 mt-8">Sammanfattning</h2>
        <p class="text-lg text-gray-700">
            Till sammanfattning är Vue.js ett fantastiskt verktyg för att bygga fantastiska moderna webbapplikationer. Det är användarvänligt för att komma igång snabbt men tillräckligt kraftfullt för att bygga något från små personliga projekt till ett stort företagsappar. Med en skål tillståndshantering och några vändningar för att optimera allt för prestanda, är Vue en fantastisk lösning för nästan alla sorters projekt.
        </p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InfoPage',
  };
  </script>
  
  <style scoped>
  /* You can add custom styles here if needed */
  </style>
  