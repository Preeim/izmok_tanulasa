window.AnatomiaApp = window.AnatomiaApp || {};

window.AnatomiaApp.DATA = {
  groups: [
    { id: "csipo", name: "Csípő" },
    { id: "terd", name: "Térd" },
    { id: "boka_lab", name: "Boka és láb" }
  ],
  categories: [
    { id: "origin", label: "Eredés" },
    { id: "insertion", label: "Tapadás" },
    { id: "innervation", label: "Beidegzés" },
    { id: "function", label: "Funkció" }
  ],
  muscles: [
    /* ==================== CSÍPŐ (17) ==================== */
    {
      id: "m_iliacus",
      latin: "M. iliacus",
      hungarian: "Csípőizom (m. iliopsoas része)",
      groups: ["csipo"],
      subgroup: "Csípő flexorok",
      origin: [
        "Crista iliaca belső felszíne (fossa iliaca)"
      ],
      insertion: [
        "Trochanter minor"
      ],
      innervation: [
        "N. femoralis"
      ],
      function: [
        "Csípő flexió",
        "Csípő addukció",
        "Csípő kirotáció",
        "Medence előrebillentése"
      ],
      note: "Példa: amikor megpróbálja keresztbe tenni az egyik lábát a másikon."
    },
    {
      id: "m_psoas_major",
      latin: "M. psoas major",
      hungarian: "Nagy horpaszizom (m. iliopsoas része)",
      groups: ["csipo"],
      subgroup: "Csípő flexorok",
      origin: [
        "L1–L5 (Th12–L4) csigolyák processus transversusa ventralisan",
        "Th12–L4 csigolyatestek és discus intervertebralisok"
      ],
      insertion: [
        "Trochanter minor"
      ],
      innervation: [
        "N. femoralis (plexus lumbalis)"
      ],
      function: [
        "Csípő flexió",
        "Csípő kirotáció",
        "Csípő addukció",
        "Medence előrebillentése",
        "Lumbalis gerinc extensió (lordózis fokozása, zárt lánc)",
        "Lumbalis gerinc azonos oldali lateralflexió (zárt lánc)",
        "Lumbalis gerinc ellenoldali rotáció (zárt lánc)"
      ],
      note: "Teljes felülésnél a csípőflexorokat (főleg a m. psoas majort) erősítjük; zárt láncban a törzs előreemelését végzi és fokozza a lumbalis lordózist."
    },
    {
      id: "m_sartorius",
      latin: "M. sartorius",
      hungarian: "Szabóizom",
      groups: ["csipo", "terd"],
      subgroup: "Csípő flexorok",
      origin: [
        "SIAS (spina iliaca anterior superior) medialis része"
      ],
      insertion: [
        "Tuberositas tibiae medialis felszíne (pes anserinus)"
      ],
      innervation: [
        "N. femoralis"
      ],
      function: [
        "Csípő flexió",
        "Csípő abdukció",
        "Csípő kirotáció",
        "Térd flexió",
        "Térd berotáció (hajlított térdben)",
        "Medence előrebillentése"
      ],
      note: "A pes anserinus egyik alkotója; a térdízület medialis oldalának stabilizátora."
    },
    {
      id: "m_tensor_fasciae_latae",
      latin: "M. tensor fasciae latae (TFL)",
      hungarian: "Combpólyafeszítő izom",
      groups: ["csipo", "terd"],
      subgroup: "Csípő flexorok",
      origin: [
        "SIAS (spina iliaca anterior superior) lateralis része"
      ],
      insertion: [
        "Tractus iliotibialis → tibia lateralis condylusa"
      ],
      innervation: [
        "N. gluteus superior"
      ],
      function: [
        "Csípő flexió",
        "Csípő abdukció",
        "Csípő berotáció",
        "Térd flexió (hajlított térdnél) / stabilizálás",
        "Térd kirotáció (hajlított térdben)",
        "Medence előrebillentése",
        "Medence oldalirányú stabilizálása"
      ],
      note: "A térdízület lateralis oldalának stabilizátora; egylábas támaszban a m. gluteus mediusszal együtt stabilizálja a medencét."
    },
    {
      id: "m_gluteus_maximus",
      latin: "M. gluteus maximus",
      hungarian: "Nagy farizom",
      groups: ["csipo", "terd"],
      subgroup: "Csípő extensorok",
      origin: [
        "Crista iliaca medialis/hátsó része",
        "Sacrum alsó fele",
        "Os coccygis",
        "Lig. sacrotuberale"
      ],
      insertion: [
        "Tuberositas glutea (femur)",
        "Tractus iliotibialis"
      ],
      innervation: [
        "N. gluteus inferior"
      ],
      function: [
        "Csípő extensió",
        "Csípő kirotáció",
        "Csípő abdukció (felső rostok)",
        "Csípő addukció (alsó rostok)",
        "Medence hátrabillentése",
        "Térd lateralis stabilizálása (tractus iliotibialis feszítése)"
      ],
      note: "Felső rostjai 40–60° csípőflexióban is abdukálnak; a tractus iliotibialis feszítésével stabilizálja a térdet."
    },
    {
      id: "m_gluteus_medius",
      latin: "M. gluteus medius",
      hungarian: "Középső farizom",
      groups: ["csipo"],
      subgroup: "Csípő abduktorok",
      origin: [
        "Os ilium külső felszíne, felső íve (linea glutea anterior és posterior között)"
      ],
      insertion: [
        "Trochanter major lateralisan"
      ],
      innervation: [
        "N. gluteus superior"
      ],
      function: [
        "Csípő abdukció",
        "Csípő berotáció (elülső rostok)",
        "Csípő kirotáció (hátulsó rostok)",
        "Medence azonos oldalra billentése (fordított működés)",
        "Medence oldalirányú stabilizálása"
      ],
      note: "Egylábas támaszban a TFL-lel együtt biztosítja a medence frontális síkú stabilitását."
    },
    {
      id: "m_gluteus_minimus",
      latin: "M. gluteus minimus",
      hungarian: "Kis farizom",
      groups: ["csipo"],
      subgroup: "Csípő abduktorok",
      origin: [
        "Os ilium külső felszíne, alsó fele"
      ],
      insertion: [
        "Trochanter major ventralisan"
      ],
      innervation: [
        "N. gluteus superior"
      ],
      function: [
        "Csípő abdukció",
        "Csípő berotáció (elülső rostok)",
        "Csípő kirotáció (hátulsó rostok)",
        "Csípő flexió (elülső rostok)",
        "Medence azonos oldalra billentése (fordított működés)",
        "Medence oldalirányú stabilizálása"
      ],
      note: "Fordított működése és medencestabilizáló szerepe megegyezik a m. gluteus mediusszal."
    },
    {
      id: "m_adductor_longus",
      latin: "M. adductor longus",
      hungarian: "Hosszú közelítőizom",
      groups: ["csipo"],
      subgroup: "Csípő adduktorok",
      origin: [
        "Ramus superior és inferior ossis pubis határa"
      ],
      insertion: [
        "Linea aspera labium mediale középső harmada"
      ],
      innervation: [
        "N. obturatorius"
      ],
      function: [
        "Csípő addukció",
        "Csípő flexió"
      ],
      note: "Másodlagos csípőflexorként is működik."
    },
    {
      id: "m_adductor_magnus",
      latin: "M. adductor magnus",
      hungarian: "Nagy közelítőizom",
      groups: ["csipo"],
      subgroup: "Csípő adduktorok",
      origin: [
        "Ramus ossis ischii",
        "Tuber ischiadicum"
      ],
      insertion: [
        "Linea aspera labium mediale",
        "Femur medialis epicondylusa (tuberculum adductorium)"
      ],
      innervation: [
        "N. obturatorius",
        "N. ischiadicus"
      ],
      function: [
        "Csípő addukció",
        "Csípő flexió (felső rész)",
        "Csípő extensió (alsó rész)"
      ],
      note: "Felső része flexiót, alsó része extensiót végez; kettős beidegzésű."
    },
    {
      id: "m_adductor_brevis",
      latin: "M. adductor brevis",
      hungarian: "Rövid közelítőizom",
      groups: ["csipo"],
      subgroup: "Csípő adduktorok",
      origin: [
        "Ramus inferior ossis pubis"
      ],
      insertion: [
        "Linea aspera labium mediale proximalis harmada"
      ],
      innervation: [
        "N. obturatorius"
      ],
      function: [
        "Csípő addukció",
        "Csípő flexió"
      ],
      note: "Másodlagos csípőflexorként is szerepel."
    },
    {
      id: "m_pectineus",
      latin: "M. pectineus",
      hungarian: "Fésűizom",
      groups: ["csipo"],
      subgroup: "Csípő adduktorok",
      origin: [
        "Pecten ossis pubis"
      ],
      insertion: [
        "Linea pectinea (femur)"
      ],
      innervation: [
        "N. femoralis",
        "N. obturatorius"
      ],
      function: [
        "Csípő addukció",
        "Csípő flexió"
      ],
      note: "A jegyzetben n. femoralis / n. obturatorius kettős beidegzéssel szerepel."
    },
    {
      id: "m_gracilis",
      latin: "M. gracilis",
      hungarian: "Karcsúizom",
      groups: ["csipo", "terd"],
      subgroup: "Csípő adduktorok",
      origin: [
        "Symphysis pubica alatt (ramus inferior ossis pubis)"
      ],
      insertion: [
        "Tuberositas tibiae medialis felszíne (pes anserinus)"
      ],
      innervation: [
        "N. obturatorius"
      ],
      function: [
        "Csípő addukció",
        "Térd flexió",
        "Térd berotáció (hajlított térdben)"
      ],
      note: "A pes anserinus tagja; egyetlen kétízületi csípőadduktor."
    },
    {
      id: "m_piriformis",
      latin: "M. piriformis",
      hungarian: "Körteképű izom",
      groups: ["csipo"],
      subgroup: "Csípő kirotátorok",
      origin: [
        "Sacrum elülső/belső felszíne (alsó része)"
      ],
      insertion: [
        "Trochanter major csúcsa"
      ],
      innervation: [
        "Plexus sacralis"
      ],
      function: [
        "Csípő kirotáció",
        "Csípő abdukció (hajlított csípőnél)"
      ],
      note: "Hajlított csípőhelyzetben abdukál."
    },
    {
      id: "m_obturator_internus",
      latin: "M. obturator internus",
      hungarian: "Belső elfedőizom",
      groups: ["csipo"],
      subgroup: "Csípő kirotátorok",
      origin: [
        "Medence belső felszíne (membrana obturatoria és környező csontok)"
      ],
      insertion: [
        "Trochanter major medialis része (fossa trochanterica)"
      ],
      innervation: [
        "Plexus lumbosacralis"
      ],
      function: [
        "Csípő kirotáció",
        "Csípő abdukció"
      ],
      note: "Mély csípő kirotátor; a mm. gemelli az inánál kísérik."
    },
    {
      id: "m_obturator_externus",
      latin: "M. obturator externus",
      hungarian: "Külső elfedőizom",
      groups: ["csipo"],
      subgroup: "Csípő kirotátorok",
      origin: [
        "Medence külső felszíne (membrana obturatoria és környező csontok)"
      ],
      insertion: [
        "Trochanter major medialis része (fossa trochanterica)"
      ],
      innervation: [
        "N. obturatorius"
      ],
      function: [
        "Csípő kirotáció",
        "Csípő addukció"
      ],
      note: "Gyenge csípőaddukciót is végez."
    },
    {
      id: "mm_gemelli",
      latin: "Mm. gemelli (gemellus superior et inferior)",
      hungarian: "Ikerizmok",
      groups: ["csipo"],
      subgroup: "Csípő kirotátorok",
      origin: [
        "Os ischii (spina ischiadica és tuber ischiadicum)"
      ],
      insertion: [
        "Trochanter major medialis része (fossa trochanterica)"
      ],
      innervation: [
        "Plexus lumbosacralis"
      ],
      function: [
        "Csípő kirotáció",
        "Csípő abdukció"
      ],
      note: "A m. obturator internus felett és alatt helyezkednek el, annak inával tapadnak."
    },
    {
      id: "m_quadratus_femoris",
      latin: "M. quadratus femoris",
      hungarian: "Négyszögű combizom",
      groups: ["csipo"],
      subgroup: "Csípő kirotátorok",
      origin: [
        "Tuber ischiadicum felső/külső része"
      ],
      insertion: [
        "Crista intertrochanterica"
      ],
      innervation: [
        "Plexus lumbosacralis"
      ],
      function: [
        "Csípő kirotáció",
        "Csípő addukció"
      ],
      note: "Gyenge csípőaddukciót is végez."
    },

    /* ==================== TÉRD (8) ==================== */
    {
      id: "m_biceps_femoris",
      latin: "M. biceps femoris",
      hungarian: "Kétfejű combizom (ischiocruralis)",
      groups: ["csipo", "terd"],
      subgroup: "Térdízületi flexorok",
      origin: [
        "Caput longum: tuber ischiadicum, lig. sacrotuberale",
        "Caput breve: femur teste, linea aspera labium laterale"
      ],
      insertion: [
        "Caput fibulae",
        "Tibia lateralis condylusa"
      ],
      innervation: [
        "N. ischiadicus"
      ],
      function: [
        "Térd flexió",
        "Térd kirotáció (hajlított térdben)",
        "Csípő extensió",
        "Csípő kirotáció (csípő extensióban)",
        "Csípő addukció",
        "Medence hátrabillentése"
      ],
      note: "A térdízület lateralis és hátsó stabilizátora; a caput longum a csípőextensorok közé tartozik."
    },
    {
      id: "m_semitendinosus",
      latin: "M. semitendinosus",
      hungarian: "Félig inas izom (ischiocruralis)",
      groups: ["csipo", "terd"],
      subgroup: "Térdízületi flexorok",
      origin: [
        "Tuber ischiadicum"
      ],
      insertion: [
        "Tuberositas tibiae medialis felszíne (pes anserinus)"
      ],
      innervation: [
        "N. ischiadicus"
      ],
      function: [
        "Térd flexió",
        "Térd berotáció (hajlított térdben)",
        "Csípő extensió",
        "Csípő addukció",
        "Csípő berotáció",
        "Medence hátrabillentése"
      ],
      note: "A pes anserinus tagja; a térdízület medialis stabilizátora és a csípő egyik berotátora."
    },
    {
      id: "m_semimembranosus",
      latin: "M. semimembranosus",
      hungarian: "Félig hártyás izom (ischiocruralis)",
      groups: ["csipo", "terd"],
      subgroup: "Térdízületi flexorok",
      origin: [
        "Tuber ischiadicum",
        "Lig. sacrotuberale"
      ],
      insertion: [
        "Tibia medialis condylusa"
      ],
      innervation: [
        "N. ischiadicus"
      ],
      function: [
        "Térd flexió",
        "Térd berotáció (hajlított térdben)",
        "Csípő extensió",
        "Csípő addukció",
        "Csípő berotáció",
        "Medence hátrabillentése"
      ],
      note: "A csípő egyik berotátora; fordított működésében a medencét hátrabillenti."
    },
    {
      id: "m_popliteus",
      latin: "M. popliteus",
      hungarian: "Térdárokizom",
      groups: ["terd"],
      subgroup: "Térdízületi flexorok",
      origin: [
        "Femur condylus lateralis",
        "Lig. popliteum arcuatum",
        "Lateralis meniscus"
      ],
      insertion: [
        "Tibia hátsó felszíne (medialis condylus és linea m. solei között)"
      ],
      innervation: [
        "N. tibialis"
      ],
      function: [
        "Térd flexió",
        "Térd berotáció (hajlított térdben)",
        "Lateralis meniscus hátrahúzása flexiókor (becsípődés ellen)"
      ],
      note: "Gyenge térdflexor, a zárt térdízület „kulcsa”; védi a lateralis meniscust a becsípődéstől."
    },
    {
      id: "m_rectus_femoris",
      latin: "M. rectus femoris",
      hungarian: "Egyenes combizom (quadriceps)",
      groups: ["csipo", "terd"],
      subgroup: "Térdízületi extensorok (M. quadriceps femoris)",
      origin: [
        "SIAI (spina iliaca anterior inferior)",
        "Acetabulum felső része"
      ],
      insertion: [
        "Patella → lig. patellae → tuberositas tibiae"
      ],
      innervation: [
        "N. femoralis"
      ],
      function: [
        "Térd extensió",
        "Csípő flexió",
        "Medence előrebillentése"
      ],
      note: "Nincs csípőrotációs hatása; kétízületi fej."
    },
    {
      id: "m_vastus_medialis",
      latin: "M. vastus medialis",
      hungarian: "Belső vaskosizom (quadriceps)",
      groups: ["terd"],
      subgroup: "Térdízületi extensorok (M. quadriceps femoris)",
      origin: [
        "Linea aspera labium mediale felső kétharmada"
      ],
      insertion: [
        "Patella → lig. patellae → tuberositas tibiae"
      ],
      innervation: [
        "N. femoralis"
      ],
      function: [
        "Térd extensió",
        "Patella medialis stabilizálása"
      ],
      note: "A térd végnyújtásában és a patella medialis vezetésében kulcsszerepű."
    },
    {
      id: "m_vastus_intermedius",
      latin: "M. vastus intermedius",
      hungarian: "Középső vaskosizom (quadriceps)",
      groups: ["terd"],
      subgroup: "Térdízületi extensorok (M. quadriceps femoris)",
      origin: [
        "Femur elülső-oldalsó felszínének felső kétharmada"
      ],
      insertion: [
        "Patella → lig. patellae → tuberositas tibiae"
      ],
      innervation: [
        "N. femoralis"
      ],
      function: [
        "Térd extensió"
      ]
    },
    {
      id: "m_vastus_lateralis",
      latin: "M. vastus lateralis",
      hungarian: "Külső vaskosizom (quadriceps)",
      groups: ["terd"],
      subgroup: "Térdízületi extensorok (M. quadriceps femoris)",
      origin: [
        "Trochanter major alsó része",
        "Linea aspera labium laterale"
      ],
      insertion: [
        "Patella → lig. patellae → tuberositas tibiae"
      ],
      innervation: [
        "N. femoralis"
      ],
      function: [
        "Térd extensió"
      ]
    },

    /* ==================== BOKA ÉS LÁB (22) ==================== */
    {
      id: "m_gastrocnemius",
      latin: "M. gastrocnemius medialis et lateralis",
      hungarian: "Kétfejű lábikraizom",
      groups: ["terd", "boka_lab"],
      subgroup: "Boka plantarflexorok",
      origin: [
        "Medialis fej: femur medialis condylus, facies poplitea, térdízületi tok",
        "Lateralis fej: femur lateralis epicondylus"
      ],
      insertion: [
        "Tuber calcanei (Achilles-ín)"
      ],
      innervation: [
        "N. tibialis"
      ],
      function: [
        "Boka plantarflexió",
        "Térd flexió",
        "Térdízület hátsó stabilizálása",
        "Láb szupináció (inverzió)"
      ],
      note: "Inkább rövidülésre hajlamos (tónusos) izom."
    },
    {
      id: "m_soleus",
      latin: "M. soleus",
      hungarian: "Gázlóizom",
      groups: ["boka_lab"],
      subgroup: "Boka plantarflexorok",
      origin: [
        "Caput fibulae",
        "Fibula hátsó proximalis része",
        "Membrana interossea cruris"
      ],
      insertion: [
        "Tuber calcanei (Achilles-ín)"
      ],
      innervation: [
        "N. tibialis"
      ],
      function: [
        "Boka plantarflexió",
        "Láb szupináció (inverzió)"
      ],
      note: "Inkább gyengülésre hajlamos izom."
    },
    {
      id: "m_tibialis_posterior",
      latin: "M. tibialis posterior",
      hungarian: "Hátsó sípcsonti izom",
      groups: ["boka_lab"],
      subgroup: "Boka plantarflexorok",
      origin: [
        "Membrana interossea cruris felső része",
        "Tibia és fibula proximalis 2/3-a"
      ],
      insertion: [
        "Os naviculare",
        "Os cuneiforme I–III. (plantaris oldalon)",
        "Os cuboideum",
        "II–IV. metatarsus bázisa"
      ],
      innervation: [
        "N. tibialis"
      ],
      function: [
        "Boka plantarflexió",
        "Láb szupináció (inverzió)",
        "Medialis hosszboltozat emelése / fenntartása"
      ],
      note: "Az os navicularét emeli (a medialis hosszboltozat legmagasabb pontja) – a m. peroneus longus után az egyik legfontosabb hosszboltozat-emelő izom."
    },
    {
      id: "m_peroneus_longus",
      latin: "M. peroneus (fibularis) longus",
      hungarian: "Hosszú szárkapcsi izom",
      groups: ["boka_lab"],
      subgroup: "Boka plantarflexorok",
      origin: [
        "Caput fibulae",
        "Fibula felső 2/3-a lateralisan"
      ],
      insertion: [
        "I. metatarsus bázisa (talpi rész)",
        "Os cuneiforme mediale (talpi rész)"
      ],
      innervation: [
        "N. peroneus superficialis"
      ],
      function: [
        "Boka plantarflexió",
        "Láb pronáció (everzió)",
        "Mindhárom lábboltozat emelése"
      ],
      note: "Kengyelt alkot a m. tibialis anteriorral; mindhárom lábboltozatot emeli."
    },
    {
      id: "m_peroneus_brevis",
      latin: "M. peroneus (fibularis) brevis",
      hungarian: "Rövid szárkapcsi izom",
      groups: ["boka_lab"],
      subgroup: "Boka plantarflexorok",
      origin: [
        "Fibula alsó 2/3-a lateralisan"
      ],
      insertion: [
        "V. metatarsus bázisa lateralisan (tuberositas ossis metatarsi V.)"
      ],
      innervation: [
        "N. peroneus superficialis"
      ],
      function: [
        "Boka plantarflexió",
        "Láb pronáció (everzió)",
        "Lateralis hosszboltozat emelése"
      ],
      note: "A lateralis hosszboltozatot emeli."
    },
    {
      id: "m_plantaris",
      latin: "M. plantaris",
      hungarian: "Talpi izom",
      groups: ["terd", "boka_lab"],
      subgroup: "Boka plantarflexorok",
      origin: [
        "Femur lateralis epicondylusa felett"
      ],
      insertion: [
        "Tuber calcanei (Achilles-ín mellett)"
      ],
      innervation: [
        "N. tibialis"
      ],
      function: [
        "Boka plantarflexió",
        "Térd flexió"
      ],
      note: "Gyenge boka plantarflexor és térdflexor."
    },
    {
      id: "m_tibialis_anterior",
      latin: "M. tibialis anterior",
      hungarian: "Elülső sípcsonti izom",
      groups: ["boka_lab"],
      subgroup: "Boka dorsalflexorok",
      origin: [
        "Tibia lateralis condylusa",
        "Tibia oldalsó felső része",
        "Membrana interossea cruris"
      ],
      insertion: [
        "Os cuneiforme mediale",
        "I. metatarsus bázisa (talpi rész)"
      ],
      innervation: [
        "N. peroneus profundus"
      ],
      function: [
        "Boka dorsalflexió",
        "Láb szupináció (inverzió)",
        "Medialis hosszboltozat süllyesztése"
      ],
      note: "A m. tibialis posterior ellen hat: az I. metatarsust emeli a lábtőcsonthoz képest, így a medialis hosszboltozatot süllyeszti."
    },
    {
      id: "m_peroneus_tertius",
      latin: "M. peroneus (fibularis) tertius",
      hungarian: "Harmadik szárkapcsi izom",
      groups: ["boka_lab"],
      subgroup: "Boka dorsalflexorok",
      origin: [
        "M. extensor digitorum longus eredési vonala",
        "Fibula alsó harmada",
        "Membrana interossea cruris"
      ],
      insertion: [
        "V. metatarsus bázisa dorsalisan"
      ],
      innervation: [
        "N. peroneus profundus"
      ],
      function: [
        "Boka dorsalflexió",
        "Láb pronáció (everzió)"
      ],
      note: "Izoláltan nehezen vizsgálható; nem mindenkinél létező izom."
    },
    {
      id: "m_flexor_hallucis_longus",
      latin: "M. flexor hallucis longus",
      hungarian: "Hosszú öregujjhajlító",
      groups: ["boka_lab"],
      subgroup: "Hallux (öregujj) izmai",
      origin: [
        "Fibula hátsó-alsó felszíne",
        "Membrana interossea cruris"
      ],
      insertion: [
        "Hallux distalis phalanx talpi része"
      ],
      innervation: [
        "N. tibialis"
      ],
      function: [
        "Hallux összes ízületének flexiója",
        "Boka plantarflexió",
        "Láb szupináció (inverzió)",
        "Medialis hosszboltozat emelése / fenntartása"
      ]
    },
    {
      id: "m_flexor_hallucis_brevis",
      latin: "M. flexor hallucis brevis",
      hungarian: "Rövid öregujjhajlító",
      groups: ["boka_lab"],
      subgroup: "Hallux (öregujj) izmai",
      origin: [
        "Os cuboideum",
        "Ossa cuneiformia talpi része",
        "M. tibialis posterior ina"
      ],
      insertion: [
        "Hallux MTP ízületi tok",
        "Hallux proximalis phalanx bázisa (szezámcsontokon keresztül)"
      ],
      innervation: [
        "N. plantaris medialis",
        "N. plantaris lateralis"
      ],
      function: [
        "Hallux MTP flexió",
        "Medialis hosszboltozat emelése / fenntartása"
      ]
    },
    {
      id: "m_extensor_hallucis_longus",
      latin: "M. extensor hallucis longus",
      hungarian: "Hosszú öregujjfeszítő",
      groups: ["boka_lab"],
      subgroup: "Hallux (öregujj) izmai",
      origin: [
        "Fibula elülső része (lábszár középső harmada)",
        "Membrana interossea cruris"
      ],
      insertion: [
        "Hallux distalis phalanx bázisa"
      ],
      innervation: [
        "N. peroneus profundus"
      ],
      function: [
        "Hallux extensió",
        "Boka dorsalflexió",
        "Láb szupináció (inverzió)"
      ]
    },
    {
      id: "m_extensor_hallucis_brevis",
      latin: "M. extensor hallucis brevis",
      hungarian: "Rövid öregujjfeszítő (m. extensor digitorum brevis 1-es feje)",
      groups: ["boka_lab"],
      subgroup: "Hallux (öregujj) izmai",
      origin: [
        "Sulcus calcanei",
        "Lig. talocalcaneum laterale"
      ],
      insertion: [
        "Hallux proximalis phalanx bázisa"
      ],
      innervation: [
        "N. peroneus profundus"
      ],
      function: [
        "Hallux MTP extensió"
      ],
      note: "A m. extensor digitorum brevis 1-es feje; az extensor digitorum apparátus része."
    },
    {
      id: "m_abductor_hallucis",
      latin: "M. abductor hallucis",
      hungarian: "Öregujj-távolító izom",
      groups: ["boka_lab"],
      subgroup: "Hallux (öregujj) izmai",
      origin: [
        "Tuber calcanei mediale",
        "Aponeurosis plantaris"
      ],
      insertion: [
        "Hallux MTP ízületi tok",
        "Hallux proximalis phalanx bázisa medialisan"
      ],
      innervation: [
        "N. plantaris medialis"
      ],
      function: [
        "Hallux MTP abdukció",
        "Hallux MTP flexió",
        "Hallux oppozíció",
        "Medialis hosszboltozat emelése / fenntartása"
      ]
    },
    {
      id: "m_adductor_hallucis",
      latin: "M. adductor hallucis",
      hungarian: "Öregujj-közelítő izom",
      groups: ["boka_lab"],
      subgroup: "Hallux (öregujj) izmai",
      origin: [
        "Caput transversum: II–V. lábujjak MTP feje",
        "Caput obliquum: II–IV. metatarsus bázis talpi felszíne"
      ],
      insertion: [
        "Hallux MTP ízületi tok",
        "Hallux proximalis phalanx bázisa lateralisan"
      ],
      innervation: [
        "N. plantaris lateralis"
      ],
      function: [
        "Hallux MTP addukció",
        "Hallux MTP flexió",
        "Harántboltozat fenntartása"
      ],
      note: "A caput transversum tartja a harántboltozatot; a jegyzetben néhol n. plantaris medialis szerepel, anatómiailag n. plantaris lateralis."
    },
    {
      id: "m_flexor_digitorum_longus",
      latin: "M. flexor digitorum longus",
      hungarian: "Hosszú lábujjhajlító",
      groups: ["boka_lab"],
      subgroup: "II–V. lábujjak izmai",
      origin: [
        "Tibia hátsó része (linea m. solei alatt)"
      ],
      insertion: [
        "II–V. ujj distalis phalanx bázisa plantarisan"
      ],
      innervation: [
        "N. tibialis"
      ],
      function: [
        "II–V. ujj MTP, PIP, DIP flexió",
        "Boka plantarflexió",
        "Láb szupináció (inverzió)"
      ]
    },
    {
      id: "m_flexor_digitorum_brevis",
      latin: "M. flexor digitorum brevis",
      hungarian: "Rövid lábujjhajlító",
      groups: ["boka_lab"],
      subgroup: "II–V. lábujjak izmai",
      origin: [
        "Tuber calcanei",
        "Aponeurosis plantaris"
      ],
      insertion: [
        "II–V. ujj középső phalanx (phalanx media) bázisa"
      ],
      innervation: [
        "N. plantaris medialis"
      ],
      function: [
        "II–V. ujj MTP és PIP flexió"
      ],
      note: "A talp közepén 4 ágra oszlik."
    },
    {
      id: "m_extensor_digitorum_longus",
      latin: "M. extensor digitorum longus",
      hungarian: "Hosszú lábujjfeszítő",
      groups: ["boka_lab"],
      subgroup: "II–V. lábujjak izmai",
      origin: [
        "Tibia lateralis condylusa alatt",
        "Membrana interossea cruris",
        "Fibula felső része"
      ],
      insertion: [
        "II–V. ujj distalis phalanxa és dorsalis aponeurosis"
      ],
      innervation: [
        "N. peroneus profundus"
      ],
      function: [
        "II–V. ujj MTP, PIP, DIP extensió",
        "Boka dorsalflexió",
        "Láb pronáció (everzió)"
      ]
    },
    {
      id: "m_extensor_digitorum_brevis",
      latin: "M. extensor digitorum brevis",
      hungarian: "Rövid lábujjfeszítő",
      groups: ["boka_lab"],
      subgroup: "II–V. lábujjak izmai",
      origin: [
        "Sulcus calcanei",
        "Lig. talocalcaneum laterale"
      ],
      insertion: [
        "II–IV. ujj hosszú extensor inakon"
      ],
      innervation: [
        "N. peroneus profundus"
      ],
      function: [
        "I–IV. ujj MTP extensió",
        "II–IV. ujj IP extensió"
      ]
    },
    {
      id: "m_quadratus_plantae",
      latin: "M. quadratus plantae",
      hungarian: "Négyszögű talpizom",
      groups: ["boka_lab"],
      subgroup: "II–V. lábujjak izmai",
      origin: [
        "Calcaneus alsó felszíne (processus medialis és lateralis előtt)"
      ],
      insertion: [
        "M. flexor digitorum longus ina (lateralis széle)"
      ],
      innervation: [
        "N. plantaris lateralis"
      ],
      function: [
        "M. flexor digitorum longus ferde húzásának korrigálása (egyenes ujjflexió segítése)"
      ]
    },
    {
      id: "mm_interossei_dorsales",
      latin: "Mm. interossei dorsales pedis (4 izom)",
      hungarian: "Lábháti csontközti izmok",
      groups: ["boka_lab"],
      subgroup: "A talp kisizmai",
      origin: [
        "Metatarsusok egymás felé néző felszínei (4 kétfejű izom)"
      ],
      insertion: [
        "II–IV. ujj proximalis phalanx bázisa és extensor aponeurosis"
      ],
      innervation: [
        "N. plantaris lateralis"
      ],
      function: [
        "Lábujjak abdukciója (távolítás a 2. ujjtól)",
        "II–V. ujj MTP flexió",
        "II–V. ujj PIP és DIP extensió"
      ],
      note: "Vizsgálat: aktívan tudja-e távolítani az ujjakat egymástól."
    },
    {
      id: "mm_interossei_plantares",
      latin: "Mm. interossei plantares pedis (3 izom)",
      hungarian: "Talpi csontközti izmok",
      groups: ["boka_lab"],
      subgroup: "A talp kisizmai",
      origin: [
        "III–V. metatarsusok medialis oldala (3 fej)"
      ],
      insertion: [
        "III–V. ujj proximalis phalanx bázisa és m. extensor digitorum longus ina"
      ],
      innervation: [
        "N. plantaris lateralis"
      ],
      function: [
        "Lábujjak addukciója (közelítés a 2. ujjhoz)",
        "II–V. ujj MTP flexió",
        "II–V. ujj PIP és DIP extensió"
      ]
    },
    {
      id: "mm_lumbricales",
      latin: "Mm. lumbricales (4 izom)",
      hungarian: "Gilisztaizmok",
      groups: ["boka_lab"],
      subgroup: "A talp kisizmai",
      origin: [
        "M. flexor digitorum longus II–V. ujjakhoz futó inai (4 fej)"
      ],
      insertion: [
        "M. extensor digitorum longus inai (proximalis phalanx magasságában)"
      ],
      innervation: [
        "N. plantaris medialis",
        "N. plantaris lateralis"
      ],
      function: [
        "II–V. ujj MTP flexió",
        "II–V. ujj PIP és DIP extensió"
      ],
      note: "Fontos szerepük van az egyenetlen talajon való támaszkodásban és járáskor."
    }
  ]
};
