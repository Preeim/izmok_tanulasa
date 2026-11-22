window.AnatomiaApp = window.AnatomiaApp || {};
window.AnatomiaApp.DATA = window.AnatomiaApp.DATA || {};

window.AnatomiaApp.DATA.movements = [
  {
    "id": "allkapocs_elevacio",
    "jointId": "allkapocs",
    "region": "fej",
    "termLatin": "Eleváció (mandibula)",
    "termHu": "Állkapocs emelése (száj zárása)",
    "labelLatin": "Állkapocs eleváció",
    "labelHu": "Állkapocs emelése / száj zárása",
    "oppositeId": "allkapocs_depresszio",
    "everydayPhrases": [
      "erőteljesen összezárod az állkapcsodat (ráharapsz valamire)",
      "összeszorítod a fogaidat rágás közben",
      "felhúzod az alsó állkapcsodat, hogy becsukd a szádat"
    ],
    "hint": "Eleváció = emelés; az állkapocsnál ez a harapás / szájzárás."
  },
  {
    "id": "allkapocs_depresszio",
    "jointId": "allkapocs",
    "region": "fej",
    "termLatin": "Depresszió (mandibula)",
    "termHu": "Állkapocs süllyesztése (száj nyitása)",
    "labelLatin": "Állkapocs depresszió",
    "labelHu": "Állkapocs süllyesztése / száj nyitása",
    "oppositeId": "allkapocs_elevacio",
    "everydayPhrases": [
      "nagyra kinyitod a szádat (leengeded az alsó állkapcsod)",
      "ellenállással szemben nyitod a szádat ásításkor",
      "lefelé húzod az állkapcsodat szájnyitáshoz"
    ],
    "hint": "Depresszió = süllyesztés; az állkapocsnál ez a száj kinyitása."
  },
  {
    "id": "allkapocs_protrusio",
    "jointId": "allkapocs",
    "region": "fej",
    "termLatin": "Protrusio (mandibula)",
    "termHu": "Állkapocs előretolása",
    "labelLatin": "Állkapocs protrusio",
    "labelHu": "Állkapocs előretolása",
    "oppositeId": "allkapocs_retrusio",
    "everydayPhrases": [
      "előretolod az alsó állkapcsodat (kiugrasztod az álladat)",
      "az alsó fogsorodat a felső elé csúsztatod",
      "előrecsúsztatod a mandibuládat"
    ],
    "hint": "Protrusio = előretolás (pro = előre)."
  },
  {
    "id": "allkapocs_retrusio",
    "jointId": "allkapocs",
    "region": "fej",
    "termLatin": "Retrusio (mandibula)",
    "termHu": "Állkapocs hátrahúzása",
    "labelLatin": "Állkapocs retrusio",
    "labelHu": "Állkapocs hátrahúzása",
    "oppositeId": "allkapocs_protrusio",
    "everydayPhrases": [
      "hátrahúzod az alsó állkapcsodat a koponya felé",
      "visszahúzod az előretolt állkapcsodat",
      "hátracsúsztatod az alsó fogsorodat"
    ],
    "hint": "Retrusio = hátrahúzás (re = vissza/hátra)."
  },
  {
    "id": "nyak_flexio",
    "jointId": "nyak",
    "region": "nyak",
    "termLatin": "Flexió (nyak)",
    "termHu": "Nyak/fej előrehajlítása",
    "labelLatin": "Nyaki flexió",
    "labelHu": "Nyak / fej előrehajlítása",
    "oppositeId": "nyak_extensio",
    "everydayPhrases": [
      "előrehajtod a fejedet (álladat a mellkasodhoz közelíted)",
      "lefelé bólintasz a fejeddel, mintha a cipődre néznél",
      "előregörbíted a nyakadat"
    ],
    "hint": "Flexió = hajlítás; a nyaknál ez az előrebólintás."
  },
  {
    "id": "nyak_extensio",
    "jointId": "nyak",
    "region": "nyak",
    "termLatin": "Extensió (nyak)",
    "termHu": "Nyak/fej hátrahajlítása",
    "labelLatin": "Nyaki extensió",
    "labelHu": "Nyak / fej hátrahajlítása",
    "oppositeId": "nyak_flexio",
    "everydayPhrases": [
      "hátrahajtod a fejedet, mintha a plafonra néznél",
      "hátrafeszíted a nyakadat és a tarkódat",
      "felfelé nézel a fejed hátrabillentésével"
    ],
    "hint": "Extensió = feszítés/hátrahajlítás."
  },
  {
    "id": "nyak_lateralflexio",
    "jointId": "nyak",
    "region": "nyak",
    "termLatin": "Lateralflexió (nyak)",
    "termHu": "Nyak oldalra hajlítása",
    "labelLatin": "Nyaki lateralflexió",
    "labelHu": "Nyak / fej oldalra döntése",
    "oppositeId": null,
    "everydayPhrases": [
      "oldalra döntöd a fejedet (füledet a vállad felé közelíted)",
      "oldalirányba hajlítod a nyakadat",
      "a jobb füledet a jobb válladhoz döntöd"
    ],
    "hint": "Lateralflexió = oldalra hajlítás (lateralis = oldalsó)."
  },
  {
    "id": "nyak_rotacio",
    "jointId": "nyak",
    "region": "nyak",
    "termLatin": "Rotáció (nyak)",
    "termHu": "Fej elfordítása",
    "labelLatin": "Nyaki rotáció",
    "labelHu": "Fej / nyak elfordítása",
    "oppositeId": null,
    "everydayPhrases": [
      "oldalra fordítod a fejedet (mintha hátranéznél a vállad felett)",
      "elforgatod a fejedet balra-jobbra, mint egy 'nem' intésnél",
      "a tekinteteddel oldalra fordulva elforgatod a nyakadat"
    ],
    "hint": "Rotáció = hossztengely körüli forgatás."
  },
  {
    "id": "torzs_flexio",
    "jointId": "torzs",
    "region": "torzs",
    "termLatin": "Flexió (törzs)",
    "termHu": "Törzs előrehajlítása",
    "labelLatin": "Törzs flexió",
    "labelHu": "Törzs előrehajlítása (hasprés)",
    "oppositeId": "torzs_extensio",
    "everydayPhrases": [
      "előrehajlítod a törzsedet (mint egy felülésnél)",
      "begömbölyíted a derekadat és a hasaddal előrehúzod a mellkasodat",
      "előre görnyedsz a törzseddel a medencéd felé"
    ],
    "hint": "Törzs flexió = előrehajlás / felülés mozdulata."
  },
  {
    "id": "torzs_extensio",
    "jointId": "torzs",
    "region": "torzs",
    "termLatin": "Extensió (törzs)",
    "termHu": "Törzs feszítése / homorítása",
    "labelLatin": "Törzs extensió",
    "labelHu": "Törzs feszítése / kiegyenesítése",
    "oppositeId": "torzs_flexio",
    "everydayPhrases": [
      "kiegyenesíted és enyhén hátrahomorítod a hátadat",
      "felemeled a mellkasodat hason fekvésből (hátfeszítés)",
      "erőteljesen kihúzod és megfeszíted a gerincedet hátrafelé"
    ],
    "hint": "Törzs extensió = hát kiegyenesítése, hátrahomorítás."
  },
  {
    "id": "torzs_lateralflexio",
    "jointId": "torzs",
    "region": "torzs",
    "termLatin": "Lateralflexió (törzs)",
    "termHu": "Törzs oldalra hajlítása",
    "labelLatin": "Törzs lateralflexió",
    "labelHu": "Törzs oldalra hajlítása",
    "oppositeId": null,
    "everydayPhrases": [
      "oldalra hajolsz a törzseddel (mintha egy bőröndért nyúlnál magad mellé)",
      "oldalirányba döntöd a felsőtestedet derékból",
      "egyik oldalra görbíted a törzsedet"
    ],
    "hint": "Lateralflexió = törzs oldalra döntése."
  },
  {
    "id": "torzs_rotacio",
    "jointId": "torzs",
    "region": "torzs",
    "termLatin": "Rotáció (törzs)",
    "termHu": "Törzs elfordítása / csavarása",
    "labelLatin": "Törzs rotáció",
    "labelHu": "Törzs csavarása / elfordítása",
    "oppositeId": null,
    "everydayPhrases": [
      "elcsavarod a felsőtestedet oldalra (derékból hátrafordulsz)",
      "elfordítod a mellkasodat a medencédhez képest",
      "törzscsavarást végzel oldalirányba"
    ],
    "hint": "Törzs rotáció = a felsőtest hossztengely körüli csavarása."
  },
  {
    "id": "legzes_belegzes",
    "jointId": "mellkas",
    "region": "torzs",
    "termLatin": "Inspiratio",
    "termHu": "Belégzés (mellkas tágítása)",
    "labelLatin": "Inspiratio (belégzés)",
    "labelHu": "Mély belégzés / bordák emelése",
    "oppositeId": "legzes_kilegzes",
    "everydayPhrases": [
      "mély levegőt veszel és megemeled a mellkasodat",
      "erőteljesen belélegzel, tágítva a bordakosaradat",
      "teleszívod a tüdődet levegővel"
    ],
    "hint": "Inspiratio = belégzés (a rekeszizom lesüllyed, a külső bordaköziek emelik a bordákat)."
  },
  {
    "id": "legzes_kilegzes",
    "jointId": "mellkas",
    "region": "torzs",
    "termLatin": "Exspiratio (erőltetett)",
    "termHu": "Erőltetett kilégzés",
    "labelLatin": "Erőltetett exspiratio",
    "labelHu": "Erőltetett kilégzés / bordák süllyesztése",
    "oppositeId": "legzes_belegzes",
    "everydayPhrases": [
      "erőteljesen kifújod a levegőt (mintha lufit fújnál fel)",
      "aktívan összepréseled a mellkasodat és a hasadat kilégzéskor",
      "erőltetett kilégzéssel süllyeszted a bordáidat"
    ],
    "hint": "Exspiratio = kilégzés (erőltetve a hasizmok és a belső bordaköziek dolgoznak)."
  },
  {
    "id": "vallov_elevacio",
    "jointId": "vallov",
    "region": "felso_vegtag",
    "termLatin": "Eleváció (vállöv)",
    "termHu": "Vállöv emelése (vállvonogatás)",
    "labelLatin": "Vállöv eleváció",
    "labelHu": "Vállak / lapocka emelése",
    "oppositeId": "vallov_depresszio",
    "everydayPhrases": [
      "felhúzod a válladat a füled felé (vállat vonsz)",
      "megemeled a vállövedet és a lapockádat felfelé",
      "vállvonogatással magasra emeled a vállaidat"
    ],
    "hint": "Eleváció = emelés (vállvonogatás)."
  },
  {
    "id": "vallov_depresszio",
    "jointId": "vallov",
    "region": "felso_vegtag",
    "termLatin": "Depresszió (vállöv)",
    "termHu": "Vállöv süllyesztése",
    "labelLatin": "Vállöv depresszió",
    "labelHu": "Vállak / lapocka lenyomása",
    "oppositeId": "vallov_elevacio",
    "everydayPhrases": [
      "tudatosan lenyomod a vállaidat a füledtől távolítva",
      "lefelé húzod a lapockáidat (mint tolódzkodásnál a váll leszorítása)",
      "mélyre süllyeszted a vállövedet"
    ],
    "hint": "Depresszió = süllyesztés / lenyomás."
  },
  {
    "id": "vallov_protrakcio",
    "jointId": "vallov",
    "region": "felso_vegtag",
    "termLatin": "Protrakció (lapocka)",
    "termHu": "Lapocka előrehúzása",
    "labelLatin": "Lapocka protrakció",
    "labelHu": "Lapocka előrehúzása / vállak előretolása",
    "oppositeId": "vallov_retrakcio",
    "everydayPhrases": [
      "előretolod a válladat, eltávolítva a lapockádat a gerinctől (mint egy ütés végén)",
      "előrehúzod a lapockáidat a mellkasod oldala felé",
      "extra messzire nyújtózol előre a vállöveddel"
    ],
    "hint": "Protrakció = előrehúzás (pro = előre)."
  },
  {
    "id": "vallov_retrakcio",
    "jointId": "vallov",
    "region": "felso_vegtag",
    "termLatin": "Retrakció (lapocka)",
    "termHu": "Lapocka hátrahúzása / összezárása",
    "labelLatin": "Lapocka retrakció",
    "labelHu": "Lapockák összezárása (hátrahúzás)",
    "oppositeId": "vallov_protrakcio",
    "everydayPhrases": [
      "összezárod a lapockáidat a hátad közepén",
      "hátrahúzod a vállaidat, kihúzva a mellkasodat",
      "a gerinced felé közelíted a lapockáidat"
    ],
    "hint": "Retrakció = hátrahúzás (re = hátra/vissza)."
  },
  {
    "id": "vallov_kifele_rotacio",
    "jointId": "vallov",
    "region": "felso_vegtag",
    "termLatin": "Lapocka kifelé rotációja",
    "termHu": "Lapocka felfelé/kifelé forgatása",
    "labelLatin": "Lapocka kifelé rotáció",
    "labelHu": "Lapocka kifelé forgatása (kar magastartásba)",
    "oppositeId": "vallov_befele_rotacio",
    "everydayPhrases": [
      "a lapocka alsó csúcsát kifelé-felfelé forgatod, hogy a karod vízszintes fölé emelkedhessen",
      "felfelé forgatod a vállízületi vápát magastartáshoz",
      "kifelé fordítod a lapockádat fej fölé emelés közben"
    ],
    "hint": "A kar 90° fölé emeléséhez a lapockának kifelé kell forognia (trapezius + serratus anterior)."
  },
  {
    "id": "vallov_befele_rotacio",
    "jointId": "vallov",
    "region": "felso_vegtag",
    "termLatin": "Lapocka befelé rotációja",
    "termHu": "Lapocka lefelé/befelé forgatása",
    "labelLatin": "Lapocka befelé rotáció",
    "labelHu": "Lapocka befelé forgatása (kar lehúzásakor)",
    "oppositeId": "vallov_kifele_rotacio",
    "everydayPhrases": [
      "a lapocka alsó csúcsát visszaforgatod a gerinc felé, miközben lehúzod a karodat",
      "lefelé-befelé forgatod a lapockádat a hátad mögé nyúláskor",
      "befelé billented a lapockádat a kar leengedésekor"
    ],
    "hint": "Befelé rotáció = a lapocka alsó csúcsa a gerinc felé fordul vissza."
  },
  {
    "id": "vall_anteflexio",
    "jointId": "vall",
    "region": "felso_vegtag",
    "termLatin": "Anteflexió (váll)",
    "termHu": "Kar előreemelése",
    "labelLatin": "Váll anteflexió (flexió)",
    "labelHu": "Kar előreemelése (váll)",
    "oppositeId": "vall_retroflexio",
    "everydayPhrases": [
      "előreemeled a karodat magad elé",
      "előrelendíted a felkarodat a törzsed elé",
      "előre nyújtózol a karoddal vállból"
    ],
    "hint": "Anteflexió = előrehajlítás/előreemelés (ante = elöl)."
  },
  {
    "id": "vall_retroflexio",
    "jointId": "vall",
    "region": "felso_vegtag",
    "termLatin": "Retroflexió (váll)",
    "termHu": "Kar hátrahúzása",
    "labelLatin": "Váll retroflexió (extensió)",
    "labelHu": "Kar hátrahúzása (váll)",
    "oppositeId": "vall_anteflexio",
    "everydayPhrases": [
      "hátrahúzod a karodat a törzsed mögé",
      "hátralendíted a felkarodat vállból (mintha sífutóbotot tolnál hátra)",
      "a hátad mögé húzod a felkarodat"
    ],
    "hint": "Retroflexió = hátrahúzás (retro = hátra)."
  },
  {
    "id": "vall_abdukcio",
    "jointId": "vall",
    "region": "felso_vegtag",
    "termLatin": "Abdukció (váll)",
    "termHu": "Kar oldalemelése (távolítás)",
    "labelLatin": "Váll abdukció",
    "labelHu": "Kar távolítása / oldalemelése",
    "oppositeId": "vall_addukcio",
    "everydayPhrases": [
      "oldalra emeled a karodat (eltávolítod a törzsedtől)",
      "oldalemeléssel kinyitod a karodat vízszintesig",
      "távolítod a felkarodat a tested oldalától"
    ],
    "hint": "ABdukció = eltávolítás a középvonaltól."
  },
  {
    "id": "vall_addukcio",
    "jointId": "vall",
    "region": "felso_vegtag",
    "termLatin": "Addukció (váll)",
    "termHu": "Kar közelítése a törzshöz",
    "labelLatin": "Váll addukció",
    "labelHu": "Kar közelítése / törzshöz szorítása",
    "oppositeId": "vall_abdukcio",
    "everydayPhrases": [
      "erőteljesen a törzsed oldalához szorítod a karodat",
      "oldalról lehúzod és a testedhez közelíted a felkarodat",
      "a mellkasod/oldalad felé zárod a felemelt karodat"
    ],
    "hint": "ADdukció = hozzáADás / közelítés a törzshöz."
  },
  {
    "id": "vall_berotacio",
    "jointId": "vall",
    "region": "felso_vegtag",
    "termLatin": "Berotáció (váll)",
    "termHu": "Felkar befelé forgatása",
    "labelLatin": "Váll berotáció",
    "labelHu": "Felkar befelé forgatása",
    "oppositeId": "vall_kirotacio",
    "everydayPhrases": [
      "befelé forgatod a felkarodat (mintha a hasadra tennéd a kezed vagy szkandereznél)",
      "a vállízületben befelé fordítod a felkarcsontodat",
      "befelé csavarod a karodat vállból"
    ],
    "hint": "Berotáció = a végtag elülső felszíne a test középvonala felé fordul."
  },
  {
    "id": "vall_kirotacio",
    "jointId": "vall",
    "region": "felso_vegtag",
    "termLatin": "Kirotáció (váll)",
    "termHu": "Felkar kifelé forgatása",
    "labelLatin": "Váll kirotáció",
    "labelHu": "Felkar kifelé forgatása",
    "oppositeId": "vall_berotacio",
    "everydayPhrases": [
      "kifelé forgatod a felkarodat vállból (hajlított könyökkel kinyitod az alkarod oldalra)",
      "a vállízületben kifelé fordítod a felkarcsontodat",
      "kifelé csavarod a felkarodat (mint labdadobás előtti felhúzásnál)"
    ],
    "hint": "Kirotáció = a végtag elülső felszíne kifelé fordul."
  },
  {
    "id": "konyok_flexio",
    "jointId": "konyok",
    "region": "felso_vegtag",
    "termLatin": "Flexió (könyök)",
    "termHu": "Könyök hajlítása",
    "labelLatin": "Könyök flexió",
    "labelHu": "Könyök behajlítása",
    "oppositeId": "konyok_extensio",
    "everydayPhrases": [
      "behajlítod a könyöködet (közelíted az alkarodat a válladhoz)",
      "felhúzod az alkarodat könyökből",
      "csökkented a könyököd hajlásszögét"
    ],
    "hint": "Flexió = hajlítás („flexelsz” a bicepszeddel)."
  },
  {
    "id": "konyok_extensio",
    "jointId": "konyok",
    "region": "felso_vegtag",
    "termLatin": "Extensió (könyök)",
    "termHu": "Könyök feszítése / nyújtása",
    "labelLatin": "Könyök extensió",
    "labelHu": "Könyök kinyújtása / feszítése",
    "oppositeId": "konyok_flexio",
    "everydayPhrases": [
      "teljesen kinyújtod a könyöködet (ellenállással szemben tolsz)",
      "kiegyenesíted a karodat könyökből",
      "feszíted a könyökízületedet"
    ],
    "hint": "Extensió = feszítés/nyújtás (fő izma a tricepsz)."
  },
  {
    "id": "alkar_szupinacio",
    "jointId": "alkar",
    "region": "felso_vegtag",
    "termLatin": "Szupináció (alkar)",
    "termHu": "Alkar hanyintása (tenyér felfelé)",
    "labelLatin": "Alkar szupináció",
    "labelHu": "Alkar hanyintása (tenyér felfelé)",
    "oppositeId": "alkar_pronacio",
    "everydayPhrases": [
      "felfelé fordítod a tenyeredet (mintha levest tartanál benne)",
      "kifelé forgatod az alkarodat, hogy a tenyered felfelé nézzen",
      "hanyintod az alkarodat (jobb kézzel óramutató járásával megegyezően csavarsz)"
    ],
    "hint": "SZUPináció = 'soup' (leves) – tenyér felfelé néz."
  },
  {
    "id": "alkar_pronacio",
    "jointId": "alkar",
    "region": "felso_vegtag",
    "termLatin": "Pronáció (alkar)",
    "termHu": "Alkar borintása (tenyér lefelé)",
    "labelLatin": "Alkar pronáció",
    "labelHu": "Alkar borintása (tenyér lefelé)",
    "oppositeId": "alkar_szupinacio",
    "everydayPhrases": [
      "lefelé fordítod a tenyeredet (mintha billentyűzetre tennéd a kezed)",
      "befelé forgatod az alkarodat úgy, hogy a kézhátad nézzen felfelé",
      "borintod az alkarodat (kiöntesz egy pohár vizet)"
    ],
    "hint": "PROnáció = leborítod a levest – tenyér lefelé néz."
  },
  {
    "id": "csuklo_palmarflexio",
    "jointId": "csuklo",
    "region": "felso_vegtag",
    "termLatin": "Palmarflexió (csukló)",
    "termHu": "Csukló tenyéri hajlítása",
    "labelLatin": "Csukló palmarflexió",
    "labelHu": "Csukló hajlítása a tenyér felé",
    "oppositeId": "csuklo_dorsalflexio",
    "everydayPhrases": [
      "a tenyered irányába behajlítod a csuklódat",
      "lefelé billented a kézfejedet a csuklódban (tenyéri oldalra)",
      "magad felé hajlítod a csuklódat a tenyér irányába"
    ],
    "hint": "Palmar = tenyéri; a kézfej a tenyér felé hajlik."
  },
  {
    "id": "csuklo_dorsalflexio",
    "jointId": "csuklo",
    "region": "felso_vegtag",
    "termLatin": "Dorsalflexió (csukló)",
    "termHu": "Csukló kézháti feszítése",
    "labelLatin": "Csukló dorsalflexió (extensió)",
    "labelHu": "Csukló hátrafeszítése a kézhát felé",
    "oppositeId": "csuklo_palmarflexio",
    "everydayPhrases": [
      "hátrafeszíted a csuklódat a kézhátad irányába (mint egy 'állj!' kézjelnél)",
      "felfelé húzod a kézfejedet csuklóból",
      "kézháti irányba feszíted a csuklóízületedet"
    ],
    "hint": "Dorsal = kézháti; a kézfej a kézhát felé feszül."
  },
  {
    "id": "csuklo_radialabdukcio",
    "jointId": "csuklo",
    "region": "felso_vegtag",
    "termLatin": "Radialabdukció (csukló)",
    "termHu": "Csukló hüvelykujj felé billentése",
    "labelLatin": "Csukló radialabdukció",
    "labelHu": "Csukló billentése a hüvelykujj (radius) felé",
    "oppositeId": "csuklo_ulnarabdukcio",
    "everydayPhrases": [
      "a hüvelykujjad irányába billented oldalra a csuklódat",
      "az orsócsont (radius) felé hajlítod oldalra a kézfejedet",
      "kalapácsütés előtti felemeléshez hüvelykujj felé döntöd a csuklódat"
    ],
    "hint": "Radius = hüvelykujj oldali alkarcsont → radialabdukció = hüvelykujj felé."
  },
  {
    "id": "csuklo_ulnarabdukcio",
    "jointId": "csuklo",
    "region": "felso_vegtag",
    "termLatin": "Ulnarabdukció (csukló)",
    "termHu": "Csukló kisujj felé billentése",
    "labelLatin": "Csukló ulnarabdukció",
    "labelHu": "Csukló billentése a kisujj (ulna) felé",
    "oppositeId": "csuklo_radialabdukcio",
    "everydayPhrases": [
      "a kisujjad irányába billented oldalra a csuklódat",
      "a singcsont (ulna) felé hajlítod a kézfejedet",
      "kalapácsütéskor a kisujj oldalára döntöd a csuklódat"
    ],
    "hint": "Ulna = kisujj oldali alkarcsont → ulnarabdukció = kisujj felé."
  },
  {
    "id": "ujjak_flexio",
    "jointId": "kez_ujjak",
    "region": "felso_vegtag",
    "termLatin": "Flexió (kézujjak)",
    "termHu": "Kézujjak hajlítása (ökölbe szorítás)",
    "labelLatin": "Kézujjak flexiója",
    "labelHu": "Kézujjak behajlítása / szorítás",
    "oppositeId": "ujjak_extensio",
    "everydayPhrases": [
      "erősen ökölbe szorítod a kezedet (behajlítod az ujjaidat)",
      "szorosan rámarkolsz egy rúdra az ujjaiddal",
      "behajlítod a II–V. kézujjaidat a tenyered felé"
    ],
    "hint": "Kézujjak flexiója = markolás, ökölbe szorítás."
  },
  {
    "id": "ujjak_extensio",
    "jointId": "kez_ujjak",
    "region": "felso_vegtag",
    "termLatin": "Extensió (kézujjak)",
    "termHu": "Kézujjak feszítése / kinyújtása",
    "labelLatin": "Kézujjak extensiója",
    "labelHu": "Kézujjak kinyújtása",
    "oppositeId": "ujjak_flexio",
    "everydayPhrases": [
      "egyenesre kinyújtod és kinyitod az összes ujjadat",
      "kifeszíted az ökölből az ujjaidat",
      "egyenesbe feszíted a kézujjaidat"
    ],
    "hint": "Kézujjak extensiója = a tenyér és az ujjak kinyitása."
  },
  {
    "id": "ujjak_abdukcio",
    "jointId": "kez_ujjak",
    "region": "felso_vegtag",
    "termLatin": "Abdukció (kézujjak)",
    "termHu": "Kézujjak szétterpesztése",
    "labelLatin": "Kézujjak abdukciója",
    "labelHu": "Kézujjak szétterpesztése",
    "oppositeId": "ujjak_addukcio",
    "everydayPhrases": [
      "szélesre szétterpeszted a kézujjaidat (távolítod őket a középső ujjadtól)",
      "szétnyitod az ujjaidat, mintha zongorán nagy oktávot fognál át",
      "eltávolítod egymástól az ujjaidat"
    ],
    "hint": "DAB = Dorsales ABdukálnak (szétterpesztik az ujjakat)."
  },
  {
    "id": "ujjak_addukcio",
    "jointId": "kez_ujjak",
    "region": "felso_vegtag",
    "termLatin": "Addukció (kézujjak)",
    "termHu": "Kézujjak összezárása",
    "labelLatin": "Kézujjak addukciója",
    "labelHu": "Kézujjak összezárása",
    "oppositeId": "ujjak_abdukcio",
    "everydayPhrases": [
      "szorosan összezárod egymás mellé a nyújtott ujjaidat",
      "a középső ujjad felé zárod a többi ujjadat (mintha papírlapot szorítanál közéjük)",
      "összeszorítod egymáshoz a kézujjaidat"
    ],
    "hint": "PAD = Palmares ADdukálnak (összezárják az ujjakat)."
  },
  {
    "id": "huvelyk_oppozicio",
    "jointId": "kez_ujjak",
    "region": "felso_vegtag",
    "termLatin": "Oppozíció (hüvelykujj)",
    "termHu": "Hüvelykujj szembehelyezése",
    "labelLatin": "Hüvelykujj oppozíció",
    "labelHu": "Hüvelykujj szembehelyezése a többi ujjal",
    "oppositeId": null,
    "everydayPhrases": [
      "a hüvelykujjad begyét szembe fordítod a kisujjaddal (csippentő fogás)",
      "szembehelyezed a hüvelykujjadat a többi ujjaddal egy toll megfogásához",
      "'OK' jelet formálva összecsippented a hüvelykujjadat a mutatóujjaddal"
    ],
    "hint": "Oppozíció = szembehelyezés (az emberi finomfogás alapja)."
  },
  {
    "id": "csipo_flexio",
    "jointId": "csipo",
    "region": "also_vegtag",
    "termLatin": "Flexió (csípő)",
    "termHu": "Csípő hajlítása (comb emelése)",
    "labelLatin": "Csípő flexió",
    "labelHu": "Csípő hajlítása (comb előreemelése)",
    "oppositeId": "csipo_extensio",
    "everydayPhrases": [
      "magasra előreemeled a combodat (térdedet a hasad felé húzod)",
      "behajlítod a csípődet (mint lépcsőre fellépéskor)",
      "előrelendíted a combodat csípőből"
    ],
    "hint": "Csípő flexió = a comb és a törzs közötti szög csökken (fő izma: m. iliopsoas)."
  },
  {
    "id": "csipo_extensio",
    "jointId": "csipo",
    "region": "also_vegtag",
    "termLatin": "Extensió (csípő)",
    "termHu": "Csípő feszítése (comb hátrahúzása)",
    "labelLatin": "Csípő extensió",
    "labelHu": "Csípő feszítése / kiegyenesítése",
    "oppositeId": "csipo_flexio",
    "everydayPhrases": [
      "erőteljesen hátrahúzod a combodat (vagy kiegyenesíted a csípődet felálláskor)",
      "hátralendíted a lábadat csípőből, megfeszítve a farizmodat",
      "kifeszíted a csípőízületedet (csípőtolás)"
    ],
    "hint": "Csípő extensió = a legerősebb izma a m. gluteus maximus + a hátsó combizmok."
  },
  {
    "id": "csipo_abdukcio",
    "jointId": "csipo",
    "region": "also_vegtag",
    "termLatin": "Abdukció (csípő)",
    "termHu": "Comb távolítása / oldalra emelése",
    "labelLatin": "Csípő abdukció",
    "labelHu": "Comb oldalra emelése (távolítás)",
    "oppositeId": "csipo_addukcio",
    "everydayPhrases": [
      "oldalra emeled a lábadat, eltávolítva a másik lábadtól",
      "terpeszbe nyitod a combodat csípőből",
      "kifelé távolítod a combodat a test középvonalától"
    ],
    "hint": "Csípő ABdukció = láb oldalra emelése (fő izmai: m. gluteus medius és minimus)."
  },
  {
    "id": "csipo_addukcio",
    "jointId": "csipo",
    "region": "also_vegtag",
    "termLatin": "Addukció (csípő)",
    "termHu": "Comb közelítése / összeszorítása",
    "labelLatin": "Csípő addukció",
    "labelHu": "Comb közelítése / összezárása",
    "oppositeId": "csipo_abdukcio",
    "everydayPhrases": [
      "erősen összeszorítod egymáshoz a combjaidat (mintha egy labdát préselnél köztük)",
      "a test középvonala felé húzod a combodat",
      "terpeszből összezárod a lábaidat csípőből"
    ],
    "hint": "Csípő ADdukció = combok összezárása (adductor csoport + gracilis + pectineus)."
  },
  {
    "id": "csipo_berotacio",
    "jointId": "csipo",
    "region": "also_vegtag",
    "termLatin": "Berotáció (csípő)",
    "termHu": "Comb befelé forgatása",
    "labelLatin": "Csípő berotáció",
    "labelHu": "Comb befelé forgatása",
    "oppositeId": "csipo_kirotacio",
    "everydayPhrases": [
      "befelé fordítod a combodat és a térdkalácsodat csípőből (csámpásan)",
      "befelé forgatod a lábadat a csípőízületben",
      "a combod elülső felszínét a másik lábad felé fordítod"
    ],
    "hint": "Csípő berotáció = térdkalács befelé néz."
  },
  {
    "id": "csipo_kirotacio",
    "jointId": "csipo",
    "region": "also_vegtag",
    "termLatin": "Kirotáció (csípő)",
    "termHu": "Comb kifelé forgatása",
    "labelLatin": "Csípő kirotáció",
    "labelHu": "Comb kifelé forgatása",
    "oppositeId": "csipo_berotacio",
    "everydayPhrases": [
      "kifelé fordítod a combodat csípőből (mint balett-alapállásban vagy törökülésnél)",
      "kifelé forgatod a térdkalácsodat és a lábadat csípőből",
      "kifelé csavarod a combodat a csípőízületben"
    ],
    "hint": "Csípő kirotáció = térdkalács kifelé fordul (gluteus maximus + pelvitrochanter izmok)."
  },
  {
    "id": "terd_flexio",
    "jointId": "terd",
    "region": "also_vegtag",
    "termLatin": "Flexió (térd)",
    "termHu": "Térd hajlítása",
    "labelLatin": "Térd flexió",
    "labelHu": "Térd behajlítása",
    "oppositeId": "terd_extensio",
    "everydayPhrases": [
      "behajlítod a térdedet (sarkadat a feneked felé húzod)",
      "hátrahajlítod a lábszáradat a térdízületben",
      "közelíted a lábszáradat a combod hátsó részéhez"
    ],
    "hint": "Térd flexió = a lábszár hátrahajlítása (fő izmai a hamstringek)."
  },
  {
    "id": "terd_extensio",
    "jointId": "terd",
    "region": "also_vegtag",
    "termLatin": "Extensió (térd)",
    "termHu": "Térd feszítése / nyújtása",
    "labelLatin": "Térd extensió",
    "labelHu": "Térd kinyújtása / feszítése",
    "oppositeId": "terd_flexio",
    "everydayPhrases": [
      "erőteljesen kinyújtod a térdedet (mintha előrerúgnál vagy felállnál egy székről)",
      "kiegyenesíted a lábszáradat térdből",
      "megfeszíted a térdízületedet teljesen egyenesre"
    ],
    "hint": "Térd extensió = a quadriceps femoris (négyfejű combizom) fő feladata!"
  },
  {
    "id": "boka_dorsalflexio",
    "jointId": "boka",
    "region": "also_vegtag",
    "termLatin": "Dorsalflexió (boka)",
    "termHu": "Lábfej felfelé húzása (pipálás)",
    "labelLatin": "Boka dorsalflexió",
    "labelHu": "Lábfej felfelé húzása (sarkon járás)",
    "oppositeId": "boka_plantarflexio",
    "everydayPhrases": [
      "felfelé húzod a lábfejedet a sípcsontod irányába (pipálsz / sarkon jársz)",
      "megemeled a lábujjaidat és a lábfejed elülső részét a talajról",
      "a lábhátad irányába hajlítod a bokádat"
    ],
    "hint": "Dorsal = lábhát → a lábhát közeledik a sípcsonthoz (pipálás)."
  },
  {
    "id": "boka_plantarflexio",
    "jointId": "boka",
    "region": "also_vegtag",
    "termLatin": "Plantarflexió (boka)",
    "termHu": "Lábfej lefelé nyomása (spiccelés)",
    "labelLatin": "Boka plantarflexió",
    "labelHu": "Lábfej lefelé nyomása / lábujjhegyre állás",
    "oppositeId": "boka_dorsalflexio",
    "everydayPhrases": [
      "lábujjhegyre emelkedsz (vagy spiccelve lenyomod a lábfejed, mint egy gázpedált)",
      "erősen lefelé nyomod a talpad elülső részét bokából",
      "elrugaszkodsz a talajtól a bokád kifeszítésével"
    ],
    "hint": "Planta = talp → a talp irányába hajlítás (gázpedál / lábujjhegyre állás)."
  },
  {
    "id": "lab_inverzio",
    "jointId": "lab_boltozat",
    "region": "also_vegtag",
    "termLatin": "Inverzió / Szupináció (láb)",
    "termHu": "Talp befelé fordítása",
    "labelLatin": "Láb inverzió (szupináció)",
    "labelHu": "Talp befelé fordítása (belső talpszél emelése)",
    "oppositeId": "lab_everzio",
    "everydayPhrases": [
      "befelé fordítod a talpadat (megemeled a belső talpszéledet)",
      "egymás felé fordítod a talpaidat a bokád alatt",
      "a külső talpéledre billented a lábfejedet"
    ],
    "hint": "Inverzió = talp befelé (in = be) fordul; fő izmai: tibialis anterior és posterior."
  },
  {
    "id": "lab_everzio",
    "jointId": "lab_boltozat",
    "region": "also_vegtag",
    "termLatin": "Everzió / Pronáció (láb)",
    "termHu": "Talp kifelé fordítása",
    "labelLatin": "Láb everzió (pronáció)",
    "labelHu": "Talp kifelé fordítása (külső talpszél emelése)",
    "oppositeId": "lab_inverzio",
    "everydayPhrases": [
      "kifelé fordítod a talpadat (megemeled a külső talpszéledet)",
      "a belső talpszéledre billented a lábfejedet",
      "kifelé billented a talpadat bokából"
    ],
    "hint": "Everzió = talp kifelé (e/ex = ki) fordul; fő izmai: m. fibularis (peroneus) longus és brevis."
  },
  {
    "id": "labujj_flexio",
    "jointId": "labujjak",
    "region": "also_vegtag",
    "termLatin": "Flexió (lábujjak)",
    "termHu": "Lábujjak begörbítése",
    "labelLatin": "Lábujjak flexiója",
    "labelHu": "Lábujjak talp felé hajlítása / kapaszkodás",
    "oppositeId": "labujj_extensio",
    "everydayPhrases": [
      "begörbíted a lábujjaidat, mintha egy törölközőt markolnál fel velük a padlóról",
      "erősen a talajba kapaszkodsz a lábujjaiddal és az öregujjaddal",
      "lefelé hajlítod a lábujjaidat a talpad felé"
    ],
    "hint": "Lábujjak flexiója = kapaszkodás, törölköző-markolás."
  },
  {
    "id": "labujj_extensio",
    "jointId": "labujjak",
    "region": "also_vegtag",
    "termLatin": "Extensió (lábujjak)",
    "termHu": "Lábujjak felfelé feszítése",
    "labelLatin": "Lábujjak extensiója",
    "labelHu": "Lábujjak felfelé feszítése",
    "oppositeId": "labujj_flexio",
    "everydayPhrases": [
      "felfelé feszíted a lábujjaidat és az öregujjadat",
      "felemeled az összes lábujjadat a talajról",
      "a lábhátad felé hátrafeszíted a lábujjaidat"
    ],
    "hint": "Lábujjak extensiója = lábujjak felfelé emelése."
  }
];
