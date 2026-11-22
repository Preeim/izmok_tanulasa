window.AnatomiaApp = window.AnatomiaApp || {};
window.AnatomiaApp.DATA = window.AnatomiaApp.DATA || {};

window.AnatomiaApp.DATA.muscles = [
  {
    "id": "m_masseter",
    "latin": "M. masseter",
    "hungarian": "Rágóizom",
    "region": "fej",
    "group": "Rágóizmok",
    "tier": "core",
    "origin": "Arcus zygomaticus alsó széle és belső felszíne",
    "insertion": "Tuberositas masseterica (angulus és ramus mandibulae külső felszíne)",
    "innervation": "N. massetericus (n. mandibularis, V/3)",
    "functionText": "Mandibula erőteljes emelése (harapás/szájzárás), enyhe előretolás (protrusio).",
    "actions": [
      { "movementId": "allkapocs_elevacio", "role": "prime" },
      { "movementId": "allkapocs_protrusio", "role": "synergist" }
    ]
  },
  {
    "id": "m_temporalis",
    "latin": "M. temporalis",
    "hungarian": "Halántékizom",
    "region": "fej",
    "group": "Rágóizmok",
    "tier": "core",
    "origin": "Fossa temporalis, linea temporalis inferior, fascia temporalis",
    "insertion": "Processus coronoideus mandibulae",
    "innervation": "Nn. temporales profundi (V/3)",
    "functionText": "Mandibula emelése (elülső/középső rostok) és hátrahúzása/retrusio (hátsó rostok).",
    "actions": [
      { "movementId": "allkapocs_elevacio", "role": "prime" },
      { "movementId": "allkapocs_retrusio", "role": "prime" }
    ]
  },
  {
    "id": "m_pterygoideus_medialis",
    "latin": "M. pterygoideus medialis",
    "hungarian": "Belső röpizom",
    "region": "fej",
    "group": "Rágóizmok",
    "tier": "full",
    "origin": "Fossa pterygoidea, tuber maxillae",
    "insertion": "Tuberositas pterygoidea (angulus mandibulae belső felszíne)",
    "innervation": "N. pterygoideus medialis (V/3)",
    "functionText": "Mandibula emelése, előretolása, őrlő mozgás.",
    "actions": [
      { "movementId": "allkapocs_elevacio", "role": "prime" },
      { "movementId": "allkapocs_protrusio", "role": "synergist" }
    ]
  },
  {
    "id": "m_pterygoideus_lateralis",
    "latin": "M. pterygoideus lateralis",
    "hungarian": "Külső röpizom",
    "region": "fej",
    "group": "Rágóizmok",
    "tier": "core",
    "origin": "Crista infratemporalis és lamina lateralis processus pterygoidei",
    "insertion": "Fovea pterygoidea mandibulae, rágóízületi tok és discus",
    "innervation": "N. pterygoideus lateralis (V/3)",
    "functionText": "Szájnyitás megindítása (depresszió), mandibula előretolása (protrusio), oldalirányú őrlés.",
    "actions": [
      { "movementId": "allkapocs_depresszio", "role": "prime" },
      { "movementId": "allkapocs_protrusio", "role": "prime" }
    ]
  },
  {
    "id": "m_orbicularis_oculi",
    "latin": "M. orbicularis oculi",
    "hungarian": "Szem körüli izom",
    "region": "fej",
    "group": "Mimikai izmok",
    "tier": "full",
    "origin": "Pars nasalis ossis frontalis, lig. palpebrale mediale, crista lacrimalis post.",
    "insertion": "Szemhéjak bőre, raphe palpebralis lateralis",
    "innervation": "N. facialis (VII.)",
    "functionText": "Szemrés zárása (pislogás, szoros hunyás), könnyelvezetés segítése.",
    "actions": []
  },
  {
    "id": "m_orbicularis_oris",
    "latin": "M. orbicularis oris",
    "hungarian": "Száj körüli izom",
    "region": "fej",
    "group": "Mimikai izmok",
    "tier": "full",
    "origin": "Maxilla és mandibula elülső része, környező mimikai izmok rostjai",
    "insertion": "Ajkak bőre, szájzug (modiolus)",
    "innervation": "N. facialis (VII.)",
    "functionText": "Szájrés zárása, ajkak csücsörítése, préselése.",
    "actions": []
  },
  {
    "id": "m_buccinator",
    "latin": "M. buccinator",
    "hungarian": "Trombitásizom",
    "region": "fej",
    "group": "Mimikai izmok",
    "tier": "full",
    "origin": "Maxilla és mandibula processus alveolarisa, raphe pterygomandibularis",
    "insertion": "Szájzug (modiolus), felső és alsó ajak",
    "innervation": "N. facialis (VII.)",
    "functionText": "Pofa feszítése a fogsorra rágáskor, fújás/trombitálás.",
    "actions": []
  },
  {
    "id": "m_zygomaticus_major",
    "latin": "M. zygomaticus major",
    "hungarian": "Nagy járomizom",
    "region": "fej",
    "group": "Mimikai izmok",
    "tier": "full",
    "origin": "Os zygomaticum lateralis felszíne",
    "insertion": "Szájzug (modiolus)",
    "innervation": "N. facialis (VII.)",
    "functionText": "Szájzug felfelé és hátrafelé húzása (mosolygás).",
    "actions": []
  },
  {
    "id": "m_sternocleidomastoideus",
    "latin": "M. sternocleidomastoideus",
    "hungarian": "Fejbiccentő izom",
    "region": "nyak",
    "group": "Felületes nyakizmok",
    "tier": "core",
    "origin": "Manubrium sterni és clavicula medialis harmada",
    "insertion": "Processus mastoideus, linea nuchalis superior",
    "innervation": "N. accessorius (XI.) + plexus cervicalis (C2–C3)",
    "functionText": "Egyoldalt: nyak azonos oldalra hajlítása, fej ellenoldalra forgatása; Kétoldalt: nyak előrehajlítása; belégzési segédizom.",
    "actions": [
      { "movementId": "nyak_flexio", "role": "prime" },
      { "movementId": "nyak_lateralflexio", "role": "prime" },
      { "movementId": "nyak_rotacio", "role": "prime" },
      { "movementId": "legzes_belegzes", "role": "synergist" }
    ]
  },
  {
    "id": "m_digastricus",
    "latin": "M. digastricus",
    "hungarian": "Kéthasú nyakizom",
    "region": "nyak",
    "group": "Nyelvcsont feletti izmok",
    "tier": "core",
    "origin": "Venter post.: incisura mastoidea; Venter ant.: fossa digastrica mandibulae",
    "insertion": "Köztes ín kötőszöveti hurokkal az os hyoideumon",
    "innervation": "Venter ant.: n. mylohyoideus (V/3); Venter post.: n. facialis (VII.)",
    "functionText": "Szájnyitás (mandibula süllyesztése és hátrahúzása), nyelvcsont emelése nyeléskor.",
    "actions": [
      { "movementId": "allkapocs_depresszio", "role": "prime" },
      { "movementId": "allkapocs_retrusio", "role": "synergist" }
    ]
  },
  {
    "id": "m_mylohyoideus",
    "latin": "M. mylohyoideus",
    "hungarian": "Szájfenékizom",
    "region": "nyak",
    "group": "Nyelvcsont feletti izmok",
    "tier": "full",
    "origin": "Linea mylohyoidea mandibulae",
    "insertion": "Raphe mylohyoidea, corpus ossis hyoidei",
    "innervation": "N. mylohyoideus (V/3)",
    "functionText": "Szájfenék alkotása, nyelvcsont emelése, szájnyitás segítése.",
    "actions": [
      { "movementId": "allkapocs_depresszio", "role": "synergist" }
    ]
  },
  {
    "id": "m_geniohyoideus",
    "latin": "M. geniohyoideus",
    "hungarian": "Áll-nyelvcsonti izom",
    "region": "nyak",
    "group": "Nyelvcsont feletti izmok",
    "tier": "full",
    "origin": "Spina mentalis mandibulae",
    "insertion": "Corpus ossis hyoidei elülső felszíne",
    "innervation": "C1 (n. hypoglossus útján)",
    "functionText": "Nyelvcsont előre- és felfelé húzása, szájnyitás segítése.",
    "actions": [
      { "movementId": "allkapocs_depresszio", "role": "synergist" }
    ]
  },
  {
    "id": "m_sternohyoideus",
    "latin": "M. sternohyoideus",
    "hungarian": "Szegycsont-nyelvcsonti izom",
    "region": "nyak",
    "group": "Nyelvcsont alatti izmok",
    "tier": "full",
    "origin": "Manubrium sterni belső felszíne, art. sternoclavicularis",
    "insertion": "Corpus ossis hyoidei alsó széle",
    "innervation": "Ansa cervicalis (C1–C3)",
    "functionText": "Nyelvcsont süllyesztése és rögzítése nyelés és beszéd közben.",
    "actions": []
  },
  {
    "id": "m_omohyoideus",
    "latin": "M. omohyoideus",
    "hungarian": "Lapocka-nyelvcsonti izom",
    "region": "nyak",
    "group": "Nyelvcsont alatti izmok",
    "tier": "full",
    "origin": "Margo superior scapulae (incisura scapulae mellett)",
    "insertion": "Corpus ossis hyoidei oldalsó része",
    "innervation": "Ansa cervicalis (C1–C3)",
    "functionText": "Nyelvcsont süllyesztése, mély nyaki fascia feszítése.",
    "actions": []
  },
  {
    "id": "m_scalenus_anterior",
    "latin": "M. scalenus anterior",
    "hungarian": "Elülső ferde nyakizom",
    "region": "nyak",
    "group": "Mély nyakizmok (scalenus)",
    "tier": "core",
    "origin": "C3–C6 harántnyúlványok elülső gumói",
    "insertion": "1. borda (tuberculum m. scaleni anterioris)",
    "innervation": "Plexus cervicalis et brachialis (C4–C6)",
    "functionText": "Nyak oldalra hajlítása, kétoldalt előrehajlítása, 1. borda emelése (belégzés).",
    "actions": [
      { "movementId": "nyak_lateralflexio", "role": "prime" },
      { "movementId": "nyak_flexio", "role": "synergist" },
      { "movementId": "legzes_belegzes", "role": "synergist" }
    ]
  },
  {
    "id": "m_scalenus_medius",
    "latin": "M. scalenus medius",
    "hungarian": "Középső ferde nyakizom",
    "region": "nyak",
    "group": "Mély nyakizmok (scalenus)",
    "tier": "full",
    "origin": "C2–C7 harántnyúlványai",
    "insertion": "1. borda (sulcus a. subclaviae mögött)",
    "innervation": "Plexus cervicalis et brachialis (C3–C8)",
    "functionText": "Nyak oldalra hajlítása, 1. borda emelése (belégzési segédizom).",
    "actions": [
      { "movementId": "nyak_lateralflexio", "role": "prime" },
      { "movementId": "legzes_belegzes", "role": "synergist" }
    ]
  },
  {
    "id": "m_longus_colli",
    "latin": "M. longus colli",
    "hungarian": "Hosszú nyakizom",
    "region": "nyak",
    "group": "Mély nyakizmok (praevertebralis)",
    "tier": "full",
    "origin": "C3–Th3 csigolyatestek és harántnyúlványok",
    "insertion": "Atlas elülső íve, C2–C6 csigolyatestek és harántnyúlványok",
    "innervation": "Nn. cervicales (C2–C6)",
    "functionText": "Nyaki gerinc előrehajlítása (flexió), egyoldalt oldalra hajlítás.",
    "actions": [
      { "movementId": "nyak_flexio", "role": "prime" },
      { "movementId": "nyak_lateralflexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_splenius_capitis",
    "latin": "M. splenius capitis",
    "hungarian": "Feji szíjizom",
    "region": "nyak",
    "group": "Mély hát-/tarkóizmok",
    "tier": "core",
    "origin": "Lig. nuchae alsó fele, C7–Th3 tövisnyúlványok",
    "insertion": "Processus mastoideus, linea nuchalis superior",
    "innervation": "Rami dorsales nn. cervicalium (C2–C6)",
    "functionText": "Kétoldalt: fej és nyak extensiója; Egyoldalt: azonos oldalra hajlítás és forgatás.",
    "actions": [
      { "movementId": "nyak_extensio", "role": "prime" },
      { "movementId": "nyak_rotacio", "role": "prime" },
      { "movementId": "nyak_lateralflexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_obliquus_capitis_inferior",
    "latin": "M. obliquus capitis inferior",
    "hungarian": "Alsó ferde fejizom",
    "region": "nyak",
    "group": "Mély tarkóizmok (suboccipitalis)",
    "tier": "full",
    "origin": "Axis (C2) tövisnyúlványa",
    "insertion": "Atlas (C1) harántnyúlványa",
    "innervation": "N. suboccipitalis (C1 r. dorsalis)",
    "functionText": "Atlas (fej) azonos oldalra forgatása (rotáció).",
    "actions": [
      { "movementId": "nyak_rotacio", "role": "prime" }
    ]
  },
  {
    "id": "m_rectus_capitis_post_major",
    "latin": "M. rectus capitis posterior major",
    "hungarian": "Nagy hátsó egyenes fejizom",
    "region": "nyak",
    "group": "Mély tarkóizmok (suboccipitalis)",
    "tier": "full",
    "origin": "Axis (C2) tövisnyúlványa",
    "insertion": "Linea nuchalis inferior lateralis része",
    "innervation": "N. suboccipitalis (C1 r. dorsalis)",
    "functionText": "Fej extensiója, egyoldalt azonos oldalra forgatása.",
    "actions": [
      { "movementId": "nyak_extensio", "role": "synergist" },
      { "movementId": "nyak_rotacio", "role": "synergist" }
    ]
  },
  {
    "id": "m_diaphragma",
    "latin": "Diaphragma",
    "hungarian": "Rekeszizom",
    "region": "torzs",
    "group": "Mellkasizmok / légzőizmok",
    "tier": "core",
    "origin": "Proc. xiphoideus, 7–12. borda belső felszíne, L1–L4 csigolyák",
    "insertion": "Centrum tendineum (saját inas központ)",
    "innervation": "N. phrenicus (C3–C5)",
    "functionText": "Fő belégzőizom (összehúzódáskor lesüllyed, tágítja a mellüreget), hasprés segítése.",
    "actions": [
      { "movementId": "legzes_belegzes", "role": "prime" }
    ]
  },
  {
    "id": "mm_intercostales_externi",
    "latin": "Mm. intercostales externi",
    "hungarian": "Külső bordaközi izmok",
    "region": "torzs",
    "group": "Mély mellkasizmok",
    "tier": "core",
    "origin": "Felsőbb borda alsó széle",
    "insertion": "Alsóbb borda felső széle",
    "innervation": "Nn. intercostales (Th1–Th11)",
    "functionText": "Bordák emelése (aktív belégzés).",
    "actions": [
      { "movementId": "legzes_belegzes", "role": "prime" }
    ]
  },
  {
    "id": "mm_intercostales_interni",
    "latin": "Mm. intercostales interni",
    "hungarian": "Belső bordaközi izmok",
    "region": "torzs",
    "group": "Mély mellkasizmok",
    "tier": "core",
    "origin": "Alsóbb borda felső széle",
    "insertion": "Felsőbb borda alsó széle (sulcus costae)",
    "innervation": "Nn. intercostales (Th1–Th11)",
    "functionText": "Bordák süllyesztése (erőltetett kilégzés).",
    "actions": [
      { "movementId": "legzes_kilegzes", "role": "prime" }
    ]
  },
  {
    "id": "m_rectus_abdominis",
    "latin": "M. rectus abdominis",
    "hungarian": "Egyenes hasizom",
    "region": "torzs",
    "group": "Hasizmok",
    "tier": "core",
    "origin": "5–7. bordaporc, processus xiphoideus",
    "insertion": "Crista pubica, symphysis pubica",
    "innervation": "Nn. intercostales (Th7–Th11), n. subcostalis (Th12)",
    "functionText": "Törzs erőteljes előrehajlítása (flexió), medence elülső emelése, erőltetett kilégzés, hasprés.",
    "actions": [
      { "movementId": "torzs_flexio", "role": "prime" },
      { "movementId": "legzes_kilegzes", "role": "prime" }
    ]
  },
  {
    "id": "m_obliquus_externus",
    "latin": "M. obliquus externus abdominis",
    "hungarian": "Külső ferde hasizom",
    "region": "torzs",
    "group": "Hasizmok",
    "tier": "core",
    "origin": "5–12. borda külső felszíne",
    "insertion": "Crista iliaca, lig. inguinale, rectus-hüvely, linea alba",
    "innervation": "Nn. intercostales (Th7–Th11), n. subcostalis, n. iliohypogastricus",
    "functionText": "Kétoldalt: törzs flexió, kilégzés; Egyoldalt: azonos oldalra hajlítás, ellentétes oldalra rotáció.",
    "actions": [
      { "movementId": "torzs_flexio", "role": "prime" },
      { "movementId": "torzs_lateralflexio", "role": "prime" },
      { "movementId": "torzs_rotacio", "role": "prime" },
      { "movementId": "legzes_kilegzes", "role": "synergist" }
    ]
  },
  {
    "id": "m_obliquus_internus",
    "latin": "M. obliquus internus abdominis",
    "hungarian": "Belső ferde hasizom",
    "region": "torzs",
    "group": "Hasizmok",
    "tier": "core",
    "origin": "Fascia thoracolumbalis, crista iliaca, lig. inguinale",
    "insertion": "10–12. borda, rectus-hüvely, linea alba, os pubis",
    "innervation": "Nn. intercostales (Th8–Th11), n. subcostalis, n. iliohypogastricus, n. ilioinguinalis",
    "functionText": "Kétoldalt: törzs flexió, kilégzés; Egyoldalt: azonos oldalra hajlítás és azonos oldalra rotáció.",
    "actions": [
      { "movementId": "torzs_flexio", "role": "prime" },
      { "movementId": "torzs_lateralflexio", "role": "prime" },
      { "movementId": "torzs_rotacio", "role": "prime" },
      { "movementId": "legzes_kilegzes", "role": "synergist" }
    ]
  },
  {
    "id": "m_transversus_abdominis",
    "latin": "M. transversus abdominis",
    "hungarian": "Haránt hasizom",
    "region": "torzs",
    "group": "Hasizmok",
    "tier": "core",
    "origin": "7–12. bordaporc belső felszíne, fascia thoracolumbalis, crista iliaca, lig. inguinale",
    "insertion": "Linea alba, rectus-hüvely, os pubis",
    "innervation": "Nn. intercostales (Th7–Th11), n. subcostalis, n. iliohypogastricus, n. ilioinguinalis",
    "functionText": "Hasprés, törzs fűzőszorítása, erőltetett kilégzés, gerinc stabilizálása.",
    "actions": [
      { "movementId": "legzes_kilegzes", "role": "prime" }
    ]
  },
  {
    "id": "m_quadratus_lumborum",
    "latin": "M. quadratus lumborum",
    "hungarian": "Négyszögű ágyékizom",
    "region": "torzs",
    "group": "Hátsó hasfal izmai",
    "tier": "core",
    "origin": "Crista iliaca hátsó része, lig. iliolumbale",
    "insertion": "12. borda alsó széle, L1–L4 processus costalis",
    "innervation": "N. subcostalis (Th12), plexus lumbalis (L1–L3)",
    "functionText": "Egyoldalt: törzs oldalra hajlítása, csípő emelése; Kétoldalt: ágyéki gerinc feszítése és stabilizálása.",
    "actions": [
      { "movementId": "torzs_lateralflexio", "role": "prime" },
      { "movementId": "torzs_extensio", "role": "synergist" }
    ]
  },
  {
    "id": "m_erector_spinae",
    "latin": "M. erector spinae",
    "hungarian": "Gerincmerevítő izom (iliocostalis, longissimus, spinalis)",
    "region": "torzs",
    "group": "Mély (autochton) hátizmok",
    "tier": "core",
    "origin": "Os sacrum, crista iliaca, fascia thoracolumbalis, alsó csigolyák",
    "insertion": "Bordák, felsőbb csigolyák haránt- és tövisnyúlványai, processus mastoideus",
    "innervation": "Rami dorsales nn. spinalium",
    "functionText": "Gerinc fő feszítője (extensió), egyoldalt oldalra hajlítás és enyhe rotáció.",
    "actions": [
      { "movementId": "torzs_extensio", "role": "prime" },
      { "movementId": "nyak_extensio", "role": "synergist" },
      { "movementId": "torzs_lateralflexio", "role": "synergist" },
      { "movementId": "torzs_rotacio", "role": "synergist" }
    ]
  },
  {
    "id": "mm_multifidi",
    "latin": "Mm. multifidi",
    "hungarian": "Sokbahasadt hátizmok",
    "region": "torzs",
    "group": "Mély hátizmok (transversospinalis)",
    "tier": "full",
    "origin": "Os sacrum, SIAS/SIPS környéke, csigolyák haránt- és ízületi nyúlványai",
    "insertion": "2–4 szegmenttel feljebb lévő csigolyák tövisnyúlványai",
    "innervation": "Rami dorsales nn. spinalium",
    "functionText": "Gerinc szegmentális stabilizálása, extensió és ellenoldali rotáció.",
    "actions": [
      { "movementId": "torzs_extensio", "role": "prime" },
      { "movementId": "torzs_rotacio", "role": "synergist" }
    ]
  },
  {
    "id": "m_semispinalis_capitis",
    "latin": "M. semispinalis capitis",
    "hungarian": "Feji féltövises izom",
    "region": "torzs",
    "group": "Mély hátizmok (transversospinalis)",
    "tier": "full",
    "origin": "C4–Th6 csigolyák haránt- és ízületi nyúlványai",
    "insertion": "Os occipitale (lineae nuchales között)",
    "innervation": "Rami dorsales nn. spinalium",
    "functionText": "Fej és nyak erőteljes extensiója, enyhe ellenoldali rotáció.",
    "actions": [
      { "movementId": "nyak_extensio", "role": "prime" }
    ]
  },
  {
    "id": "m_serratus_post_superior",
    "latin": "M. serratus posterior superior",
    "hungarian": "Felső hátsó fűrészizom",
    "region": "torzs",
    "group": "Középső (spinocostalis) hátizmok",
    "tier": "full",
    "origin": "Lig. nuchae, C7–Th3 tövisnyúlványok",
    "insertion": "2–5. borda külső felszíne",
    "innervation": "Nn. intercostales (Th1–Th4)",
    "functionText": "Bordák emelése (gyenge belégzési segédizom).",
    "actions": [
      { "movementId": "legzes_belegzes", "role": "synergist" }
    ]
  },
  {
    "id": "m_serratus_post_inferior",
    "latin": "M. serratus posterior inferior",
    "hungarian": "Alsó hátsó fűrészizom",
    "region": "torzs",
    "group": "Középső (spinocostalis) hátizmok",
    "tier": "full",
    "origin": "Th11–L2 tövisnyúlványok, fascia thoracolumbalis",
    "insertion": "9–12. borda alsó széle",
    "innervation": "Nn. intercostales (Th9–Th12)",
    "functionText": "Alsó bordák süllyesztése és rögzítése (kilégzés segítése).",
    "actions": [
      { "movementId": "legzes_kilegzes", "role": "synergist" }
    ]
  },
  {
    "id": "m_levator_ani",
    "latin": "M. levator ani",
    "hungarian": "Végbélemelő izom (medencefenék)",
    "region": "torzs",
    "group": "Medencefenék (diaphragma pelvis)",
    "tier": "full",
    "origin": "Os pubis hátsó felszíne, arcus tendineus, spina ischiadica",
    "insertion": "Centrum perinei, végbél fala, lig. anococcygeum, os coccygis",
    "innervation": "Plexus sacralis (S3–S4), n. pudendus",
    "functionText": "Kismedencei szervek alátámasztása, vizelet- és széklet-kontinencia.",
    "actions": []
  },
  {
    "id": "m_trapezius",
    "latin": "M. trapezius",
    "hungarian": "Csuklyásizom",
    "region": "felso_vegtag",
    "group": "Felületes (spinohumeralis) hátizmok",
    "tier": "core",
    "origin": "Protuberantia occ. ext., lig. nuchae, C7–Th12 tövisnyúlványok",
    "insertion": "Clavicula lateralis 1/3, acromion, spina scapulae",
    "innervation": "N. accessorius (XI.) + plexus cervicalis (C3–C4)",
    "functionText": "Felső rész: vállöv eleváció, fej extensió/lateralflexió; Középső: lapocka retrakció; Alsó: depresszió; Felső+alsó: lapocka kifelé rotáció.",
    "actions": [
      { "movementId": "vallov_elevacio", "role": "prime" },
      { "movementId": "vallov_depresszio", "role": "prime" },
      { "movementId": "vallov_retrakcio", "role": "prime" },
      { "movementId": "vallov_kifele_rotacio", "role": "prime" },
      { "movementId": "nyak_extensio", "role": "prime" },
      { "movementId": "nyak_lateralflexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_latissimus_dorsi",
    "latin": "M. latissimus dorsi",
    "hungarian": "Széles hátizom",
    "region": "felso_vegtag",
    "group": "Felületes (spinohumeralis) hátizmok",
    "tier": "core",
    "origin": "Th7–Th12 tövisnyúlványok, fascia thoracolumbalis, crista iliaca, 9–12. borda",
    "insertion": "Crista tuberculi minoris humeri",
    "innervation": "N. thoracodorsalis (C6–C8)",
    "functionText": "Kar erőteljes addukciója, retroflexiója és berotációja; vállöv depressziójának segítése.",
    "actions": [
      { "movementId": "vall_addukcio", "role": "prime" },
      { "movementId": "vall_retroflexio", "role": "prime" },
      { "movementId": "vall_berotacio", "role": "prime" },
      { "movementId": "vallov_depresszio", "role": "synergist" }
    ]
  },
  {
    "id": "m_levator_scapulae",
    "latin": "M. levator scapulae",
    "hungarian": "Lapockaemelő izom",
    "region": "felso_vegtag",
    "group": "Felületes hátizmok",
    "tier": "core",
    "origin": "C1–C4 harántnyúlványok",
    "insertion": "Angulus superior és margo medialis scapulae felső része",
    "innervation": "N. dorsalis scapulae (C4–C5) + plexus cervicalis (C3–C4)",
    "functionText": "Lapocka emelése (eleváció) és befelé rotációja; nyak oldalra hajlítása.",
    "actions": [
      { "movementId": "vallov_elevacio", "role": "prime" },
      { "movementId": "vallov_befele_rotacio", "role": "prime" },
      { "movementId": "nyak_lateralflexio", "role": "synergist" },
      { "movementId": "nyak_rotacio", "role": "synergist" }
    ]
  },
  {
    "id": "m_rhomboideus_major",
    "latin": "M. rhomboideus major",
    "hungarian": "Nagy rombuszizom",
    "region": "felso_vegtag",
    "group": "Felületes hátizmok",
    "tier": "core",
    "origin": "Th2–Th5 tövisnyúlványok",
    "insertion": "Margo medialis scapulae (spina alatt)",
    "innervation": "N. dorsalis scapulae (C4–C5)",
    "functionText": "Lapocka retrakciója, befelé rotációja és emelése.",
    "actions": [
      { "movementId": "vallov_retrakcio", "role": "prime" },
      { "movementId": "vallov_befele_rotacio", "role": "prime" },
      { "movementId": "vallov_elevacio", "role": "synergist" }
    ]
  },
  {
    "id": "m_rhomboideus_minor",
    "latin": "M. rhomboideus minor",
    "hungarian": "Kis rombuszizom",
    "region": "felso_vegtag",
    "group": "Felületes hátizmok",
    "tier": "full",
    "origin": "Lig. nuchae alsó része, C7–Th1 tövisnyúlványok",
    "insertion": "Margo medialis scapulae (spina magasságában)",
    "innervation": "N. dorsalis scapulae (C4–C5)",
    "functionText": "Lapocka retrakciója, befelé rotációja és emelése.",
    "actions": [
      { "movementId": "vallov_retrakcio", "role": "prime" },
      { "movementId": "vallov_befele_rotacio", "role": "prime" },
      { "movementId": "vallov_elevacio", "role": "synergist" }
    ]
  },
  {
    "id": "m_pectoralis_major",
    "latin": "M. pectoralis major",
    "hungarian": "Nagy mellizom",
    "region": "felso_vegtag",
    "group": "Felületes mellkasizmok",
    "tier": "core",
    "origin": "Clavicula medialis fele, sternum, 2–6. bordaporc, rectus-hüvely",
    "insertion": "Crista tuberculi majoris humeri",
    "innervation": "Nn. pectorales medialis et lateralis (C5–Th1)",
    "functionText": "Kar erőteljes addukciója, berotációja és anteflexiója; légzési segédizom.",
    "actions": [
      { "movementId": "vall_addukcio", "role": "prime" },
      { "movementId": "vall_berotacio", "role": "prime" },
      { "movementId": "vall_anteflexio", "role": "prime" }
    ]
  },
  {
    "id": "m_pectoralis_minor",
    "latin": "M. pectoralis minor",
    "hungarian": "Kis mellizom",
    "region": "felso_vegtag",
    "group": "Felületes mellkasizmok",
    "tier": "core",
    "origin": "3–5. borda külső felszíne",
    "insertion": "Processus coracoideus scapulae",
    "innervation": "N. pectoralis medialis (C8–Th1)",
    "functionText": "Lapocka protrakciója, depressziója és befelé rotációja; belégzési segédizom.",
    "actions": [
      { "movementId": "vallov_protrakcio", "role": "prime" },
      { "movementId": "vallov_depresszio", "role": "prime" },
      { "movementId": "vallov_befele_rotacio", "role": "prime" },
      { "movementId": "legzes_belegzes", "role": "synergist" }
    ]
  },
  {
    "id": "m_subclavius",
    "latin": "M. subclavius",
    "hungarian": "Kulcscsont alatti izom",
    "region": "felso_vegtag",
    "group": "Felületes mellkasizmok",
    "tier": "full",
    "origin": "1. borda (csont-porc határ)",
    "insertion": "Clavicula alsó felszíne (sulcus m. subclavii)",
    "innervation": "N. subclavius (C5–C6)",
    "functionText": "Kulcscsont rögzítése és lefelé húzása (vállöv depresszió segítése).",
    "actions": [
      { "movementId": "vallov_depresszio", "role": "synergist" }
    ]
  },
  {
    "id": "m_serratus_anterior",
    "latin": "M. serratus anterior",
    "hungarian": "Elülső fűrészizom",
    "region": "felso_vegtag",
    "group": "Felületes mellkasizmok",
    "tier": "core",
    "origin": "1–9. borda külső felszíne",
    "insertion": "Margo medialis scapulae (főként angulus inferior)",
    "innervation": "N. thoracicus longus (C5–C7)",
    "functionText": "Lapocka protrakciója, kifelé rotációja (kar 90° fölé emelése), mellkasfalhoz rögzítése.",
    "actions": [
      { "movementId": "vallov_protrakcio", "role": "prime" },
      { "movementId": "vallov_kifele_rotacio", "role": "prime" },
      { "movementId": "vallov_depresszio", "role": "synergist" },
      { "movementId": "legzes_belegzes", "role": "synergist" }
    ]
  },
  {
    "id": "m_deltoideus",
    "latin": "M. deltoideus",
    "hungarian": "Deltaizom",
    "region": "felso_vegtag",
    "group": "Vállizmok",
    "tier": "core",
    "origin": "Clavicula lateralis 1/3, acromion, spina scapulae",
    "insertion": "Tuberositas deltoidea humeri",
    "innervation": "N. axillaris (C5–C6)",
    "functionText": "Kar fő abduktora (15–90°); elülső rész: anteflexió és berotáció; hátsó rész: retroflexió és kirotáció.",
    "actions": [
      { "movementId": "vall_abdukcio", "role": "prime" },
      { "movementId": "vall_anteflexio", "role": "prime" },
      { "movementId": "vall_retroflexio", "role": "prime" },
      { "movementId": "vall_berotacio", "role": "synergist" },
      { "movementId": "vall_kirotacio", "role": "synergist" }
    ]
  },
  {
    "id": "m_supraspinatus",
    "latin": "M. supraspinatus",
    "hungarian": "Tövis feletti izom (rotátorköpeny)",
    "region": "felso_vegtag",
    "group": "Vállizmok (rotátorköpeny)",
    "tier": "core",
    "origin": "Fossa supraspinata scapulae",
    "insertion": "Tuberculum majus humeri (felső benyomat)",
    "innervation": "N. suprascapularis (C5–C6)",
    "functionText": "Kar abdukciójának megindítása (0–15°), vállízület stabilizálása.",
    "actions": [
      { "movementId": "vall_abdukcio", "role": "prime" }
    ]
  },
  {
    "id": "m_infraspinatus",
    "latin": "M. infraspinatus",
    "hungarian": "Tövis alatti izom (rotátorköpeny)",
    "region": "felso_vegtag",
    "group": "Vállizmok (rotátorköpeny)",
    "tier": "core",
    "origin": "Fossa infraspinata scapulae",
    "insertion": "Tuberculum majus humeri (középső benyomat)",
    "innervation": "N. suprascapularis (C5–C6)",
    "functionText": "Kar erőteljes kirotációja, vállízület stabilizálása.",
    "actions": [
      { "movementId": "vall_kirotacio", "role": "prime" }
    ]
  },
  {
    "id": "m_teres_minor",
    "latin": "M. teres minor",
    "hungarian": "Kis görgetegizom (rotátorköpeny)",
    "region": "felso_vegtag",
    "group": "Vállizmok (rotátorköpeny)",
    "tier": "core",
    "origin": "Margo lateralis scapulae (felső-középső része)",
    "insertion": "Tuberculum majus humeri (alsó benyomat)",
    "innervation": "N. axillaris (C5–C6)",
    "functionText": "Kar kirotációja, gyenge addukció, vállízület stabilizálása.",
    "actions": [
      { "movementId": "vall_kirotacio", "role": "prime" }
    ]
  },
  {
    "id": "m_subscapularis",
    "latin": "M. subscapularis",
    "hungarian": "Lapocka alatti izom (rotátorköpeny)",
    "region": "felso_vegtag",
    "group": "Vállizmok (rotátorköpeny)",
    "tier": "core",
    "origin": "Fossa subscapularis",
    "insertion": "Tuberculum minus humeri",
    "innervation": "Nn. subscapulares superior et inferior (C5–C6)",
    "functionText": "Kar erőteljes berotációja, addukció segítése, vállízület stabilizálása.",
    "actions": [
      { "movementId": "vall_berotacio", "role": "prime" },
      { "movementId": "vall_addukcio", "role": "synergist" }
    ]
  },
  {
    "id": "m_teres_major",
    "latin": "M. teres major",
    "hungarian": "Nagy görgetegizom",
    "region": "felso_vegtag",
    "group": "Vállizmok",
    "tier": "core",
    "origin": "Angulus inferior scapulae hátsó felszíne",
    "insertion": "Crista tuberculi minoris humeri",
    "innervation": "N. subscapularis inferior (C5–C7)",
    "functionText": "Kar addukciója, berotációja és retroflexiója (latissimus dorsi szinergistája).",
    "actions": [
      { "movementId": "vall_addukcio", "role": "prime" },
      { "movementId": "vall_berotacio", "role": "prime" },
      { "movementId": "vall_retroflexio", "role": "prime" }
    ]
  },
  {
    "id": "m_biceps_brachii",
    "latin": "M. biceps brachii",
    "hungarian": "Kétfejű karizom",
    "region": "felso_vegtag",
    "group": "Felkarizmok – elülső (flexor)",
    "tier": "core",
    "origin": "Caput longum: tuberculum supraglenoidale; Caput breve: proc. coracoideus",
    "insertion": "Tuberositas radii, aponeurosis m. bicipitis brachii",
    "innervation": "N. musculocutaneus (C5–C6)",
    "functionText": "Könyök flexió, alkar legerősebb szupinátora, váll anteflexió segítése.",
    "actions": [
      { "movementId": "konyok_flexio", "role": "prime" },
      { "movementId": "alkar_szupinacio", "role": "prime" },
      { "movementId": "vall_anteflexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_coracobrachialis",
    "latin": "M. coracobrachialis",
    "hungarian": "Hollócsőr-karizom",
    "region": "felso_vegtag",
    "group": "Felkarizmok – elülső (flexor)",
    "tier": "full",
    "origin": "Processus coracoideus scapulae",
    "insertion": "Humerus medialis felszínének közepe",
    "innervation": "N. musculocutaneus (C5–C7)",
    "functionText": "Kar anteflexiója és addukciója a vállízületben.",
    "actions": [
      { "movementId": "vall_anteflexio", "role": "prime" },
      { "movementId": "vall_addukcio", "role": "synergist" }
    ]
  },
  {
    "id": "m_brachialis",
    "latin": "M. brachialis",
    "hungarian": "Karizom",
    "region": "felso_vegtag",
    "group": "Felkarizmok – elülső (flexor)",
    "tier": "core",
    "origin": "Humerus elülső felszínének alsó fele",
    "insertion": "Tuberositas ulnae, processus coronoideus ulnae",
    "innervation": "N. musculocutaneus (C5–C6) (+ kis rész: n. radialis)",
    "functionText": "Könyökízület tiszta, erőteljes flexiója az alkar helyzetétől függetlenül.",
    "actions": [
      { "movementId": "konyok_flexio", "role": "prime" }
    ]
  },
  {
    "id": "m_triceps_brachii",
    "latin": "M. triceps brachii",
    "hungarian": "Háromfejű karizom",
    "region": "felso_vegtag",
    "group": "Felkarizmok – hátsó (extensor)",
    "tier": "core",
    "origin": "Caput longum: tuberculum infraglenoidale; Caput lat. et med.: humerus hátsó felszíne",
    "insertion": "Olecranon ulnae",
    "innervation": "N. radialis (C6–C8)",
    "functionText": "Könyökízület fő feszítője (extensió); hosszú fej: váll retroflexió és addukció.",
    "actions": [
      { "movementId": "konyok_extensio", "role": "prime" },
      { "movementId": "vall_retroflexio", "role": "synergist" },
      { "movementId": "vall_addukcio", "role": "synergist" }
    ]
  },
  {
    "id": "m_anconeus",
    "latin": "M. anconeus",
    "hungarian": "Kampóizom",
    "region": "felso_vegtag",
    "group": "Felkarizmok – hátsó (extensor)",
    "tier": "full",
    "origin": "Epicondylus lateralis humeri",
    "insertion": "Olecranon lateralis széle, ulna felső hátsó felszíne",
    "innervation": "N. radialis (C7–C8)",
    "functionText": "Könyök extensió segítése, ízületi tok feszítése.",
    "actions": [
      { "movementId": "konyok_extensio", "role": "synergist" }
    ]
  },
  {
    "id": "m_pronator_teres",
    "latin": "M. pronator teres",
    "hungarian": "Hengeres borintóizom",
    "region": "felso_vegtag",
    "group": "Alkarizmok – felületes flexorok",
    "tier": "core",
    "origin": "Epicondylus medialis humeri, processus coronoideus ulnae",
    "insertion": "Radius lateralis felszínének közepe",
    "innervation": "N. medianus (C6–C7)",
    "functionText": "Alkar pronációja, könyök flexió segítése.",
    "actions": [
      { "movementId": "alkar_pronacio", "role": "prime" },
      { "movementId": "konyok_flexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_flexor_carpi_radialis",
    "latin": "M. flexor carpi radialis",
    "hungarian": "Orsócsonti csuklóhajlító",
    "region": "felso_vegtag",
    "group": "Alkarizmok – felületes flexorok",
    "tier": "core",
    "origin": "Epicondylus medialis humeri",
    "insertion": "II. (és III.) metacarpus basisa (palmarisan)",
    "innervation": "N. medianus (C6–C7)",
    "functionText": "Csukló palmarflexiója és radialabdukciója.",
    "actions": [
      { "movementId": "csuklo_palmarflexio", "role": "prime" },
      { "movementId": "csuklo_radialabdukcio", "role": "prime" }
    ]
  },
  {
    "id": "m_palmaris_longus",
    "latin": "M. palmaris longus",
    "hungarian": "Hosszú tenyérizom",
    "region": "felso_vegtag",
    "group": "Alkarizmok – felületes flexorok",
    "tier": "full",
    "origin": "Epicondylus medialis humeri",
    "insertion": "Aponeurosis palmaris, retinaculum flexorum",
    "innervation": "N. medianus (C7–C8)",
    "functionText": "Aponeurosis palmaris feszítése, csukló palmarflexiója.",
    "actions": [
      { "movementId": "csuklo_palmarflexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_flexor_carpi_ulnaris",
    "latin": "M. flexor carpi ulnaris",
    "hungarian": "Singcsonti csuklóhajlító",
    "region": "felso_vegtag",
    "group": "Alkarizmok – felületes flexorok",
    "tier": "core",
    "origin": "Epicondylus medialis humeri, olecranon és ulna hátsó széle",
    "insertion": "Os pisiforme (tovább os hamatum és V. metacarpus felé)",
    "innervation": "N. ulnaris (C7–Th1)",
    "functionText": "Csukló palmarflexiója és ulnarabdukciója.",
    "actions": [
      { "movementId": "csuklo_palmarflexio", "role": "prime" },
      { "movementId": "csuklo_ulnarabdukcio", "role": "prime" }
    ]
  },
  {
    "id": "m_flexor_digitorum_superficialis",
    "latin": "M. flexor digitorum superficialis",
    "hungarian": "Felületes ujjhajlító",
    "region": "felso_vegtag",
    "group": "Alkarizmok – középső flexor réteg",
    "tier": "core",
    "origin": "Epicondylus medialis humeri, proc. coronoideus ulnae, radius elülső felszíne",
    "insertion": "II–V. ujj középső percének két oldala (chiasma tendinum)",
    "innervation": "N. medianus (C7–Th1)",
    "functionText": "II–V. ujj PIP és MCP hajlítása, csukló palmarflexió segítése.",
    "actions": [
      { "movementId": "ujjak_flexio", "role": "prime" },
      { "movementId": "csuklo_palmarflexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_flexor_digitorum_profundus",
    "latin": "M. flexor digitorum profundus",
    "hungarian": "Mély ujjhajlító",
    "region": "felso_vegtag",
    "group": "Alkarizmok – mély flexor réteg",
    "tier": "core",
    "origin": "Ulna elülső-medialis felszínének felső 3/4-e, membrana interossea",
    "insertion": "II–V. ujj körömpercének (phalanx distalis) basisa",
    "innervation": "II–III. ujj: n. medianus (n. interosseus ant.); IV–V. ujj: n. ulnaris",
    "functionText": "II–V. ujj DIP (kizárólagos hajlító), PIP és MCP flexiója; csukló flexió segítése.",
    "actions": [
      { "movementId": "ujjak_flexio", "role": "prime" },
      { "movementId": "csuklo_palmarflexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_flexor_pollicis_longus",
    "latin": "M. flexor pollicis longus",
    "hungarian": "Hosszú hüvelykujjhajlító",
    "region": "felso_vegtag",
    "group": "Alkarizmok – mély flexor réteg",
    "tier": "full",
    "origin": "Radius elülső felszíne, membrana interossea",
    "insertion": "Hüvelykujj körömpercének basisa",
    "innervation": "N. medianus (n. interosseus anterior, C8–Th1)",
    "functionText": "Hüvelykujj IP és MCP hajlítása.",
    "actions": [
      { "movementId": "ujjak_flexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_pronator_quadratus",
    "latin": "M. pronator quadratus",
    "hungarian": "Négyszögű borintóizom",
    "region": "felso_vegtag",
    "group": "Alkarizmok – mély flexor réteg",
    "tier": "core",
    "origin": "Ulna distalis negyedének elülső felszíne",
    "insertion": "Radius distalis negyedének elülső felszíne",
    "innervation": "N. medianus (n. interosseus anterior, C8–Th1)",
    "functionText": "Alkar fő pronátora, distalis radioulnaris ízület stabilizálása.",
    "actions": [
      { "movementId": "alkar_pronacio", "role": "prime" }
    ]
  },
  {
    "id": "m_brachioradialis",
    "latin": "M. brachioradialis",
    "hungarian": "Kar-orsócsonti izom",
    "region": "felso_vegtag",
    "group": "Alkarizmok – radialis csoport",
    "tier": "core",
    "origin": "Crista supracondylaris lateralis humeri",
    "insertion": "Processus styloideus radii töve",
    "innervation": "N. radialis (C5–C6)",
    "functionText": "Könyök flexiója (különösen középhelyzetben – kalapácsfogás).",
    "actions": [
      { "movementId": "konyok_flexio", "role": "prime" }
    ]
  },
  {
    "id": "m_extensor_carpi_radialis_longus",
    "latin": "M. extensor carpi radialis longus",
    "hungarian": "Hosszú orsócsonti csuklófeszítő",
    "region": "felso_vegtag",
    "group": "Alkarizmok – radialis csoport",
    "tier": "core",
    "origin": "Crista supracondylaris lateralis humeri, epicondylus lateralis",
    "insertion": "II. metacarpus basisa (dorsalisan)",
    "innervation": "N. radialis (C6–C7)",
    "functionText": "Csukló dorsalflexiója és radialabdukciója.",
    "actions": [
      { "movementId": "csuklo_dorsalflexio", "role": "prime" },
      { "movementId": "csuklo_radialabdukcio", "role": "prime" }
    ]
  },
  {
    "id": "m_extensor_carpi_radialis_brevis",
    "latin": "M. extensor carpi radialis brevis",
    "hungarian": "Rövid orsócsonti csuklófeszítő",
    "region": "felso_vegtag",
    "group": "Alkarizmok – radialis csoport",
    "tier": "full",
    "origin": "Epicondylus lateralis humeri",
    "insertion": "III. metacarpus basisa (dorsalisan)",
    "innervation": "N. radialis – r. profundus (C7–C8)",
    "functionText": "Csukló dorsalflexiója és radialabdukciója.",
    "actions": [
      { "movementId": "csuklo_dorsalflexio", "role": "prime" },
      { "movementId": "csuklo_radialabdukcio", "role": "prime" }
    ]
  },
  {
    "id": "m_extensor_digitorum",
    "latin": "M. extensor digitorum",
    "hungarian": "Közös ujjfeszítő",
    "region": "felso_vegtag",
    "group": "Alkarizmok – felületes extensorok",
    "tier": "core",
    "origin": "Epicondylus lateralis humeri",
    "insertion": "II–V. ujj dorsalaponeurosisa",
    "innervation": "N. radialis – r. profundus (C7–C8)",
    "functionText": "II–V. ujj extensiója, csukló dorsalflexió segítése.",
    "actions": [
      { "movementId": "ujjak_extensio", "role": "prime" },
      { "movementId": "csuklo_dorsalflexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_extensor_digiti_minimi",
    "latin": "M. extensor digiti minimi",
    "hungarian": "Kisujjfeszítő",
    "region": "felso_vegtag",
    "group": "Alkarizmok – felületes extensorok",
    "tier": "full",
    "origin": "Epicondylus lateralis humeri",
    "insertion": "V. ujj dorsalaponeurosisa",
    "innervation": "N. radialis – r. profundus (C7–C8)",
    "functionText": "Kisujj önálló feszítése, csukló dorsalflexió segítése.",
    "actions": [
      { "movementId": "ujjak_extensio", "role": "synergist" }
    ]
  },
  {
    "id": "m_extensor_carpi_ulnaris",
    "latin": "M. extensor carpi ulnaris",
    "hungarian": "Singcsonti csuklófeszítő",
    "region": "felso_vegtag",
    "group": "Alkarizmok – felületes extensorok",
    "tier": "core",
    "origin": "Epicondylus lateralis humeri, ulna hátsó széle",
    "insertion": "V. metacarpus basisa (dorsalisan)",
    "innervation": "N. radialis – r. profundus (C7–C8)",
    "functionText": "Csukló dorsalflexiója és ulnarabdukciója.",
    "actions": [
      { "movementId": "csuklo_dorsalflexio", "role": "prime" },
      { "movementId": "csuklo_ulnarabdukcio", "role": "prime" }
    ]
  },
  {
    "id": "m_supinator",
    "latin": "M. supinator",
    "hungarian": "Hanyintóizom",
    "region": "felso_vegtag",
    "group": "Alkarizmok – mély extensorok",
    "tier": "core",
    "origin": "Epicondylus lateralis humeri, crista m. supinatoris ulnae, lig. anulare radii",
    "insertion": "Radius felső harmadának elülső-oldalsó felszíne",
    "innervation": "N. radialis – r. profundus (C5–C6)",
    "functionText": "Alkar szupinációja (nyújtott és hajlított könyöknél is).",
    "actions": [
      { "movementId": "alkar_szupinacio", "role": "prime" }
    ]
  },
  {
    "id": "m_abductor_pollicis_longus",
    "latin": "M. abductor pollicis longus",
    "hungarian": "Hosszú hüvelykujj-távolító",
    "region": "felso_vegtag",
    "group": "Alkarizmok – mély extensorok",
    "tier": "full",
    "origin": "Ulna és radius hátsó felszíne, membrana interossea",
    "insertion": "I. metacarpus basisa",
    "innervation": "N. radialis – r. profundus (C7–C8)",
    "functionText": "Hüvelykujj abdukciója és extensiója, csukló radialabdukció segítése.",
    "actions": [
      { "movementId": "csuklo_radialabdukcio", "role": "synergist" }
    ]
  },
  {
    "id": "m_extensor_pollicis_longus",
    "latin": "M. extensor pollicis longus",
    "hungarian": "Hosszú hüvelykujjfeszítő",
    "region": "felso_vegtag",
    "group": "Alkarizmok – mély extensorok",
    "tier": "full",
    "origin": "Ulna hátsó felszíne, membrana interossea",
    "insertion": "Hüvelykujj körömpercének basisa",
    "innervation": "N. radialis – r. profundus (C7–C8)",
    "functionText": "Hüvelykujj teljes extensiója és repozíciója.",
    "actions": [
      { "movementId": "ujjak_extensio", "role": "synergist" }
    ]
  },
  {
    "id": "m_extensor_indicis",
    "latin": "M. extensor indicis",
    "hungarian": "Mutatóujjfeszítő",
    "region": "felso_vegtag",
    "group": "Alkarizmok – mély extensorok",
    "tier": "full",
    "origin": "Ulna distalis hátsó felszíne, membrana interossea",
    "insertion": "Mutatóujj (II.) dorsalaponeurosisa",
    "innervation": "N. radialis – r. profundus (C7–C8)",
    "functionText": "Mutatóujj önálló feszítése (mutatás).",
    "actions": [
      { "movementId": "ujjak_extensio", "role": "synergist" }
    ]
  },
  {
    "id": "m_opponens_pollicis",
    "latin": "M. opponens pollicis",
    "hungarian": "Hüvelykujj-szembehelyező izom",
    "region": "felso_vegtag",
    "group": "Kézizmok – thenar",
    "tier": "core",
    "origin": "Os trapezium, retinaculum flexorum",
    "insertion": "I. metacarpus radialis széle",
    "innervation": "N. medianus – r. recurrens (C8–Th1)",
    "functionText": "Hüvelykujj oppozíciója (szembehelyezése a többi ujjal).",
    "actions": [
      { "movementId": "huvelyk_oppozicio", "role": "prime" }
    ]
  },
  {
    "id": "m_abductor_pollicis_brevis",
    "latin": "M. abductor pollicis brevis",
    "hungarian": "Rövid hüvelykujj-távolító",
    "region": "felso_vegtag",
    "group": "Kézizmok – thenar",
    "tier": "full",
    "origin": "Os scaphoideum, os trapezium, retinaculum flexorum",
    "insertion": "Hüvelykujj alappercének radialis oldala",
    "innervation": "N. medianus – r. recurrens (C8–Th1)",
    "functionText": "Hüvelykujj palmaris abdukciója és oppozíció segítése.",
    "actions": [
      { "movementId": "huvelyk_oppozicio", "role": "synergist" }
    ]
  },
  {
    "id": "m_flexor_pollicis_brevis",
    "latin": "M. flexor pollicis brevis",
    "hungarian": "Rövid hüvelykujjhajlító",
    "region": "felso_vegtag",
    "group": "Kézizmok – thenar",
    "tier": "full",
    "origin": "Retinaculum flexorum, os trapezium, trapezoideum, capitatum",
    "insertion": "Hüvelykujj alappercének radialis oldala (sesamcsont)",
    "innervation": "Caput sup.: n. medianus; Caput prof.: n. ulnaris",
    "functionText": "Hüvelykujj MCP flexiója, oppozíció segítése.",
    "actions": [
      { "movementId": "huvelyk_oppozicio", "role": "synergist" }
    ]
  },
  {
    "id": "m_adductor_pollicis",
    "latin": "M. adductor pollicis",
    "hungarian": "Hüvelykujj-közelítő izom",
    "region": "felso_vegtag",
    "group": "Kézizmok – thenar",
    "tier": "full",
    "origin": "Os capitatum, II–III. metacarpus (caput obliquum et transversum)",
    "insertion": "Hüvelykujj alappercének ulnaris oldala (sesamcsont)",
    "innervation": "N. ulnaris – r. profundus (C8–Th1)",
    "functionText": "Hüvelykujj erőteljes addukciója (kulcsfogás).",
    "actions": []
  },
  {
    "id": "m_abductor_digiti_minimi_manus",
    "latin": "M. abductor digiti minimi (manus)",
    "hungarian": "Kisujj-távolító (kéz)",
    "region": "felso_vegtag",
    "group": "Kézizmok – hypothenar",
    "tier": "full",
    "origin": "Os pisiforme, m. flexor carpi ulnaris ina",
    "insertion": "V. ujj alappercének ulnaris oldala",
    "innervation": "N. ulnaris – r. profundus (C8–Th1)",
    "functionText": "Kisujj abdukciója (távolítása).",
    "actions": [
      { "movementId": "ujjak_abdukcio", "role": "synergist" }
    ]
  },
  {
    "id": "mm_lumbricales_manus",
    "latin": "Mm. lumbricales I–IV (manus)",
    "hungarian": "Gilisztaizmok (kéz)",
    "region": "felso_vegtag",
    "group": "Kézizmok – mesothenar",
    "tier": "full",
    "origin": "M. flexor digitorum profundus inai",
    "insertion": "II–V. ujj dorsalaponeurosisának radialis oldala",
    "innervation": "I–II.: n. medianus; III–IV.: n. ulnaris",
    "functionText": "MCP ízületek flexiója, PIP és DIP ízületek extensiója.",
    "actions": [
      { "movementId": "ujjak_flexio", "role": "synergist" },
      { "movementId": "ujjak_extensio", "role": "synergist" }
    ]
  },
  {
    "id": "mm_interossei_palmares",
    "latin": "Mm. interossei palmares I–III",
    "hungarian": "Tenyéri csontközti izmok",
    "region": "felso_vegtag",
    "group": "Kézizmok – mesothenar",
    "tier": "core",
    "origin": "II., IV., V. metacarpus középső ujj felé néző oldala",
    "insertion": "II., IV., V. ujj alapperc és dorsalaponeurosis",
    "innervation": "N. ulnaris – r. profundus (C8–Th1)",
    "functionText": "Ujjak addukciója a középső ujj felé (PAD), MCP flexió, IP extensió.",
    "actions": [
      { "movementId": "ujjak_addukcio", "role": "prime" }
    ]
  },
  {
    "id": "mm_interossei_dorsales_manus",
    "latin": "Mm. interossei dorsales I–IV (manus)",
    "hungarian": "Kézháti csontközti izmok",
    "region": "felso_vegtag",
    "group": "Kézizmok – mesothenar",
    "tier": "core",
    "origin": "Szomszédos metacarpusok egymás felé néző felszínei",
    "insertion": "II–IV. ujj alapperc és dorsalaponeurosis",
    "innervation": "N. ulnaris – r. profundus (C8–Th1)",
    "functionText": "Ujjak abdukciója (terpesztése) a középső ujjtól (DAB), MCP flexió, IP extensió.",
    "actions": [
      { "movementId": "ujjak_abdukcio", "role": "prime" }
    ]
  },
  {
    "id": "m_iliopsoas",
    "latin": "M. iliopsoas (m. psoas major + m. iliacus)",
    "hungarian": "Csípőhorpasz-izom",
    "region": "also_vegtag",
    "group": "Belső csípőizmok",
    "tier": "core",
    "origin": "Psoas: Th12–L5 csigolyák; Iliacus: fossa iliaca",
    "insertion": "Trochanter minor femoris",
    "innervation": "Psoas: plexus lumbalis (L1–L3); Iliacus: n. femoralis (L2–L3)",
    "functionText": "Csípőízület legerősebb hajlítója (flexió), enyhe kirotáció; rögzített combnál törzs előrehajlítása.",
    "actions": [
      { "movementId": "csipo_flexio", "role": "prime" },
      { "movementId": "csipo_kirotacio", "role": "synergist" },
      { "movementId": "torzs_flexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_gluteus_maximus",
    "latin": "M. gluteus maximus",
    "hungarian": "Nagy farizom",
    "region": "also_vegtag",
    "group": "Külső csípőizmok (farizmok)",
    "tier": "core",
    "origin": "Os ilium (linea glutea post. mögött), sacrum, coccygis, lig. sacrotuberale",
    "insertion": "Tuberositas glutea femoris, tractus iliotibialis",
    "innervation": "N. gluteus inferior (L5–S2)",
    "functionText": "Csípőízület legerősebb feszítője (extensió) és kirotátora; medence stabilizálása.",
    "actions": [
      { "movementId": "csipo_extensio", "role": "prime" },
      { "movementId": "csipo_kirotacio", "role": "prime" }
    ]
  },
  {
    "id": "m_gluteus_medius",
    "latin": "M. gluteus medius",
    "hungarian": "Középső farizom",
    "region": "also_vegtag",
    "group": "Külső csípőizmok (farizmok)",
    "tier": "core",
    "origin": "Os ilium külső felszíne (linea glutea ant. és post. között)",
    "insertion": "Trochanter major femoris lateralis felszíne",
    "innervation": "N. gluteus superior (L4–S1)",
    "functionText": "Csípő fő abduktora; elülső rostok: berotáció; járáskor medence vízszintben tartása.",
    "actions": [
      { "movementId": "csipo_abdukcio", "role": "prime" },
      { "movementId": "csipo_berotacio", "role": "prime" }
    ]
  },
  {
    "id": "m_gluteus_minimus",
    "latin": "M. gluteus minimus",
    "hungarian": "Kis farizom",
    "region": "also_vegtag",
    "group": "Külső csípőizmok (farizmok)",
    "tier": "core",
    "origin": "Os ilium külső felszíne (linea glutea ant. és inf. között)",
    "insertion": "Trochanter major femoris elülső felszíne",
    "innervation": "N. gluteus superior (L4–S1)",
    "functionText": "Csípő abdukciója és berotációja, medence stabilizálása.",
    "actions": [
      { "movementId": "csipo_abdukcio", "role": "prime" },
      { "movementId": "csipo_berotacio", "role": "prime" }
    ]
  },
  {
    "id": "m_tensor_fasciae_latae",
    "latin": "M. tensor fasciae latae",
    "hungarian": "Combpólyafeszítő izom",
    "region": "also_vegtag",
    "group": "Külső csípőizmok",
    "tier": "core",
    "origin": "Spina iliaca anterior superior (SIAS), crista iliaca",
    "insertion": "Tractus iliotibialis → condylus lateralis tibiae (Gerdy-gumó)",
    "innervation": "N. gluteus superior (L4–S1)",
    "functionText": "Csípő abdukciója, berotációja és flexiója; fascia lata feszítése.",
    "actions": [
      { "movementId": "csipo_abdukcio", "role": "prime" },
      { "movementId": "csipo_berotacio", "role": "prime" },
      { "movementId": "csipo_flexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_piriformis",
    "latin": "M. piriformis",
    "hungarian": "Körteképű izom",
    "region": "also_vegtag",
    "group": "Mély csípőizmok (pelvitrochanter)",
    "tier": "core",
    "origin": "Os sacrum elülső (medencei) felszíne (S2–S4)",
    "insertion": "Trochanter major femoris csúcsa",
    "innervation": "Plexus sacralis közvetlen ágai (S1–S2)",
    "functionText": "Comb kirotációja (nyújtott csípőnél), abdukciója (hajlított csípőnél).",
    "actions": [
      { "movementId": "csipo_kirotacio", "role": "prime" },
      { "movementId": "csipo_abdukcio", "role": "synergist" }
    ]
  },
  {
    "id": "m_obturator_internus",
    "latin": "M. obturator internus",
    "hungarian": "Belső elfedőizom",
    "region": "also_vegtag",
    "group": "Mély csípőizmok (pelvitrochanter)",
    "tier": "full",
    "origin": "Membrana obturatoria és foramen obturatum belső széle",
    "insertion": "Fossa trochanterica femoris",
    "innervation": "N. m. obturatorii interni (L5–S2)",
    "functionText": "Comb kirotációja, hajlított csípőnél abdukciója.",
    "actions": [
      { "movementId": "csipo_kirotacio", "role": "prime" }
    ]
  },
  {
    "id": "m_gemellus_superior",
    "latin": "M. gemellus superior",
    "hungarian": "Felső ikerizom",
    "region": "also_vegtag",
    "group": "Mély csípőizmok (pelvitrochanter)",
    "tier": "full",
    "origin": "Spina ischiadica",
    "insertion": "Fossa trochanterica (m. obturator internus inával)",
    "innervation": "N. m. obturatorii interni (L5–S2)",
    "functionText": "Comb kirotációja, hajlított csípőnél abdukciója.",
    "actions": [
      { "movementId": "csipo_kirotacio", "role": "synergist" }
    ]
  },
  {
    "id": "m_gemellus_inferior",
    "latin": "M. gemellus inferior",
    "hungarian": "Alsó ikerizom",
    "region": "also_vegtag",
    "group": "Mély csípőizmok (pelvitrochanter)",
    "tier": "full",
    "origin": "Tuber ischiadicum",
    "insertion": "Fossa trochanterica (m. obturator internus inával)",
    "innervation": "N. m. quadrati femoris (L4–S1)",
    "functionText": "Comb kirotációja, hajlított csípőnél abdukciója.",
    "actions": [
      { "movementId": "csipo_kirotacio", "role": "synergist" }
    ]
  },
  {
    "id": "m_quadratus_femoris",
    "latin": "M. quadratus femoris",
    "hungarian": "Négyszögű combizom",
    "region": "also_vegtag",
    "group": "Mély csípőizmok (pelvitrochanter)",
    "tier": "full",
    "origin": "Tuber ischiadicum külső széle",
    "insertion": "Crista intertrochanterica femoris",
    "innervation": "N. m. quadrati femoris (L4–S1)",
    "functionText": "Comb erőteljes kirotációja, enyhe addukció.",
    "actions": [
      { "movementId": "csipo_kirotacio", "role": "prime" }
    ]
  },
  {
    "id": "m_sartorius",
    "latin": "M. sartorius",
    "hungarian": "Szabóizom",
    "region": "also_vegtag",
    "group": "Combizmok – elülső (extensor) csoport",
    "tier": "core",
    "origin": "Spina iliaca anterior superior (SIAS)",
    "insertion": "Pes anserinus superficialis (tibia medialis felszíne)",
    "innervation": "N. femoralis (L2–L3)",
    "functionText": "Csípő flexió, abdukció és kirotáció; térd flexió és berotáció ('törökülés').",
    "actions": [
      { "movementId": "csipo_flexio", "role": "synergist" },
      { "movementId": "csipo_abdukcio", "role": "synergist" },
      { "movementId": "csipo_kirotacio", "role": "synergist" },
      { "movementId": "terd_flexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_rectus_femoris",
    "latin": "M. rectus femoris (quadriceps)",
    "hungarian": "Egyenes combizom (négyfejű combizom)",
    "region": "also_vegtag",
    "group": "Combizmok – elülső (quadriceps)",
    "tier": "core",
    "origin": "Spina iliaca anterior inferior (SIAI), acetabulum felső széle",
    "insertion": "Patella → lig. patellae → tuberositas tibiae",
    "innervation": "N. femoralis (L2–L4)",
    "functionText": "Térdízület erőteljes extensiója ÉS csípőízület flexiója (kétízületi!).",
    "actions": [
      { "movementId": "terd_extensio", "role": "prime" },
      { "movementId": "csipo_flexio", "role": "prime" }
    ]
  },
  {
    "id": "m_vastus_lateralis",
    "latin": "M. vastus lateralis (quadriceps)",
    "hungarian": "Külső vaskosizom (négyfejű combizom)",
    "region": "also_vegtag",
    "group": "Combizmok – elülső (quadriceps)",
    "tier": "core",
    "origin": "Trochanter major, tuberositas glutea, labium laterale lineae asperae",
    "insertion": "Patella lateralis széle → lig. patellae → tuberositas tibiae",
    "innervation": "N. femoralis (L2–L4)",
    "functionText": "Térdízület erőteljes extensiója.",
    "actions": [
      { "movementId": "terd_extensio", "role": "prime" }
    ]
  },
  {
    "id": "m_vastus_medialis",
    "latin": "M. vastus medialis (quadriceps)",
    "hungarian": "Belső vaskosizom (négyfejű combizom)",
    "region": "also_vegtag",
    "group": "Combizmok – elülső (quadriceps)",
    "tier": "core",
    "origin": "Linea intertrochanterica, labium mediale lineae asperae",
    "insertion": "Patella medialis széle → lig. patellae → tuberositas tibiae",
    "innervation": "N. femoralis (L2–L4)",
    "functionText": "Térdízület extensiója (végső nyújtás és patella medialis stabilizálása).",
    "actions": [
      { "movementId": "terd_extensio", "role": "prime" }
    ]
  },
  {
    "id": "m_vastus_intermedius",
    "latin": "M. vastus intermedius (quadriceps)",
    "hungarian": "Középső vaskosizom (négyfejű combizom)",
    "region": "also_vegtag",
    "group": "Combizmok – elülső (quadriceps)",
    "tier": "full",
    "origin": "Femur elülső és oldalsó felszíne",
    "insertion": "Patella alapja → lig. patellae → tuberositas tibiae",
    "innervation": "N. femoralis (L2–L4)",
    "functionText": "Térdízület extensiója.",
    "actions": [
      { "movementId": "terd_extensio", "role": "prime" }
    ]
  },
  {
    "id": "m_pectineus",
    "latin": "M. pectineus",
    "hungarian": "Fésűizom",
    "region": "also_vegtag",
    "group": "Combizmok – medialis (adductor)",
    "tier": "full",
    "origin": "Pecten ossis pubis",
    "insertion": "Linea pectinea femoris",
    "innervation": "N. femoralis (gyakran n. obturatorius is, L2–L3)",
    "functionText": "Comb addukciója, csípő flexiója és gyenge kirotációja.",
    "actions": [
      { "movementId": "csipo_addukcio", "role": "prime" },
      { "movementId": "csipo_flexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_gracilis",
    "latin": "M. gracilis",
    "hungarian": "Karcsúizom",
    "region": "also_vegtag",
    "group": "Combizmok – medialis (adductor)",
    "tier": "core",
    "origin": "Ramus inferior ossis pubis",
    "insertion": "Pes anserinus superficialis (tibia medialis felszíne)",
    "innervation": "N. obturatorius (L2–L3)",
    "functionText": "Comb addukciója (egyetlen kétízületi adduktor!), térd flexió és berotáció segítése.",
    "actions": [
      { "movementId": "csipo_addukcio", "role": "prime" },
      { "movementId": "terd_flexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_adductor_longus",
    "latin": "M. adductor longus",
    "hungarian": "Hosszú közelítőizom",
    "region": "also_vegtag",
    "group": "Combizmok – medialis (adductor)",
    "tier": "core",
    "origin": "Os pubis (symphysis és tuberculum pubicum között)",
    "insertion": "Labium mediale lineae asperae (középső 1/3)",
    "innervation": "N. obturatorius (L2–L4)",
    "functionText": "Comb erőteljes addukciója, csípő flexió segítése.",
    "actions": [
      { "movementId": "csipo_addukcio", "role": "prime" },
      { "movementId": "csipo_flexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_adductor_brevis",
    "latin": "M. adductor brevis",
    "hungarian": "Rövid közelítőizom",
    "region": "also_vegtag",
    "group": "Combizmok – medialis (adductor)",
    "tier": "full",
    "origin": "Ramus inferior ossis pubis",
    "insertion": "Labium mediale lineae asperae (felső 1/3)",
    "innervation": "N. obturatorius (L2–L4)",
    "functionText": "Comb addukciója, csípő flexió segítése.",
    "actions": [
      { "movementId": "csipo_addukcio", "role": "prime" }
    ]
  },
  {
    "id": "m_adductor_magnus",
    "latin": "M. adductor magnus",
    "hungarian": "Nagy közelítőizom",
    "region": "also_vegtag",
    "group": "Combizmok – medialis (adductor)",
    "tier": "core",
    "origin": "Ramus inferior ossis pubis, ramus ossis ischii, tuber ischiadicum",
    "insertion": "Labium mediale lineae asperae teljes hosszában, tuberculum adductorium femoris",
    "innervation": "Elülső rész: n. obturatorius; Hátsó rész: n. ischiadicus (n. tibialis)",
    "functionText": "Comb legerősebb adduktora; hátsó része a csípő extensióját is végzi.",
    "actions": [
      { "movementId": "csipo_addukcio", "role": "prime" },
      { "movementId": "csipo_extensio", "role": "synergist" }
    ]
  },
  {
    "id": "m_obturator_externus",
    "latin": "M. obturator externus",
    "hungarian": "Külső elfedőizom",
    "region": "also_vegtag",
    "group": "Combizmok – medialis (adductor)",
    "tier": "full",
    "origin": "Membrana obturatoria és foramen obturatum külső széle",
    "insertion": "Fossa trochanterica femoris",
    "innervation": "N. obturatorius (L3–L4)",
    "functionText": "Comb kirotációja, csípőízület stabilizálása.",
    "actions": [
      { "movementId": "csipo_kirotacio", "role": "prime" }
    ]
  },
  {
    "id": "m_biceps_femoris",
    "latin": "M. biceps femoris",
    "hungarian": "Kétfejű combizom (hamstring)",
    "region": "also_vegtag",
    "group": "Combizmok – hátsó (hamstring)",
    "tier": "core",
    "origin": "Caput longum: tuber ischiadicum; Caput breve: labium laterale lineae asperae",
    "insertion": "Caput fibulae",
    "innervation": "Caput longum: n. tibialis; Caput breve: n. fibularis communis",
    "functionText": "Térd flexiója (és kirotációja); hosszú fej: csípő extensiója.",
    "actions": [
      { "movementId": "terd_flexio", "role": "prime" },
      { "movementId": "csipo_extensio", "role": "prime" }
    ]
  },
  {
    "id": "m_semitendinosus",
    "latin": "M. semitendinosus",
    "hungarian": "Félig inas izom (hamstring)",
    "region": "also_vegtag",
    "group": "Combizmok – hátsó (hamstring)",
    "tier": "core",
    "origin": "Tuber ischiadicum",
    "insertion": "Pes anserinus superficialis (tibia medialis felszíne)",
    "innervation": "N. tibialis (L5–S2)",
    "functionText": "Csípő extensiója, térd flexiója és berotációja.",
    "actions": [
      { "movementId": "terd_flexio", "role": "prime" },
      { "movementId": "csipo_extensio", "role": "prime" }
    ]
  },
  {
    "id": "m_semimembranosus",
    "latin": "M. semimembranosus",
    "hungarian": "Félig hártyás izom (hamstring)",
    "region": "also_vegtag",
    "group": "Combizmok – hátsó (hamstring)",
    "tier": "core",
    "origin": "Tuber ischiadicum",
    "insertion": "Condylus medialis tibiae hátsó felszíne (pes anserinus profundus)",
    "innervation": "N. tibialis (L5–S2)",
    "functionText": "Csípő extensiója, térd flexiója és berotációja.",
    "actions": [
      { "movementId": "terd_flexio", "role": "prime" },
      { "movementId": "csipo_extensio", "role": "prime" }
    ]
  },
  {
    "id": "m_tibialis_anterior",
    "latin": "M. tibialis anterior",
    "hungarian": "Elülső sípcsonti izom",
    "region": "also_vegtag",
    "group": "Lábszárizmok – elülső (extensor)",
    "tier": "core",
    "origin": "Condylus lateralis és tibia lateralis felszíne, membrana interossea",
    "insertion": "Os cuneiforme mediale, I. metatarsus basisa",
    "innervation": "N. fibularis (peroneus) profundus (L4–L5)",
    "functionText": "Boka fő dorsalflexiója és láb inverziója (szupináció), hosszanti boltozat tartása.",
    "actions": [
      { "movementId": "boka_dorsalflexio", "role": "prime" },
      { "movementId": "lab_inverzio", "role": "prime" }
    ]
  },
  {
    "id": "m_extensor_hallucis_longus",
    "latin": "M. extensor hallucis longus",
    "hungarian": "Hosszú öregujjfeszítő",
    "region": "also_vegtag",
    "group": "Lábszárizmok – elülső (extensor)",
    "tier": "core",
    "origin": "Fibula medialis felszíne, membrana interossea",
    "insertion": "Öregujj (I.) körömpercének dorsalaponeurosisa",
    "innervation": "N. fibularis profundus (L4–S1)",
    "functionText": "Öregujj extensiója, boka dorsalflexió segítése.",
    "actions": [
      { "movementId": "labujj_extensio", "role": "prime" },
      { "movementId": "boka_dorsalflexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_extensor_digitorum_longus",
    "latin": "M. extensor digitorum longus",
    "hungarian": "Hosszú lábujjfeszítő",
    "region": "also_vegtag",
    "group": "Lábszárizmok – elülső (extensor)",
    "tier": "core",
    "origin": "Condylus lateralis tibiae, fibula felső-elülső része, membrana interossea",
    "insertion": "II–V. lábujj dorsalaponeurosisa",
    "innervation": "N. fibularis profundus (L4–S1)",
    "functionText": "II–V. lábujj extensiója, boka dorsalflexió és láb everzió segítése.",
    "actions": [
      { "movementId": "labujj_extensio", "role": "prime" },
      { "movementId": "boka_dorsalflexio", "role": "synergist" },
      { "movementId": "lab_everzio", "role": "synergist" }
    ]
  },
  {
    "id": "m_fibularis_tertius",
    "latin": "M. fibularis (peroneus) tertius",
    "hungarian": "Harmadik szárkapcsi izom",
    "region": "also_vegtag",
    "group": "Lábszárizmok – elülső (extensor)",
    "tier": "full",
    "origin": "Fibula distalis elülső felszíne, membrana interossea",
    "insertion": "V. metatarsus basisa (dorsalisan)",
    "innervation": "N. fibularis profundus (L5–S1)",
    "functionText": "Boka dorsalflexiója és láb everziója.",
    "actions": [
      { "movementId": "boka_dorsalflexio", "role": "synergist" },
      { "movementId": "lab_everzio", "role": "synergist" }
    ]
  },
  {
    "id": "m_fibularis_longus",
    "latin": "M. fibularis (peroneus) longus",
    "hungarian": "Hosszú szárkapcsi izom",
    "region": "also_vegtag",
    "group": "Lábszárizmok – oldalsó (fibularis)",
    "tier": "core",
    "origin": "Caput fibulae, fibula felső 2/3-ának lateralis felszíne",
    "insertion": "Os cuneiforme mediale, I. metatarsus basisa (talpon áthaladva)",
    "innervation": "N. fibularis superficialis (L5–S1)",
    "functionText": "Láb erőteljes everziója (pronáció), boka plantarflexió segítése, harántboltozat tartása.",
    "actions": [
      { "movementId": "lab_everzio", "role": "prime" },
      { "movementId": "boka_plantarflexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_fibularis_brevis",
    "latin": "M. fibularis (peroneus) brevis",
    "hungarian": "Rövid szárkapcsi izom",
    "region": "also_vegtag",
    "group": "Lábszárizmok – oldalsó (fibularis)",
    "tier": "core",
    "origin": "Fibula alsó 2/3-ának lateralis felszíne",
    "insertion": "Tuberositas ossis metatarsi V.",
    "innervation": "N. fibularis superficialis (L5–S1)",
    "functionText": "Láb everziója (pronáció) és boka plantarflexió segítése.",
    "actions": [
      { "movementId": "lab_everzio", "role": "prime" },
      { "movementId": "boka_plantarflexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_gastrocnemius",
    "latin": "M. gastrocnemius (triceps surae)",
    "hungarian": "Kétfejű lábikraizom",
    "region": "also_vegtag",
    "group": "Lábszárizmok – felületes flexorok",
    "tier": "core",
    "origin": "Femur medialis és lateralis epicondylusa felett",
    "insertion": "Tuber calcanei (Achilles-ín)",
    "innervation": "N. tibialis (S1–S2)",
    "functionText": "Boka erőteljes plantarflexiója, térd flexiója, láb inverzió segítése.",
    "actions": [
      { "movementId": "boka_plantarflexio", "role": "prime" },
      { "movementId": "terd_flexio", "role": "synergist" },
      { "movementId": "lab_inverzio", "role": "synergist" }
    ]
  },
  {
    "id": "m_soleus",
    "latin": "M. soleus (triceps surae)",
    "hungarian": "Gázlóizom",
    "region": "also_vegtag",
    "group": "Lábszárizmok – felületes flexorok",
    "tier": "core",
    "origin": "Caput et collum fibulae, linea m. solei tibiae",
    "insertion": "Tuber calcanei (Achilles-ín)",
    "innervation": "N. tibialis (S1–S2)",
    "functionText": "Boka erőteljes plantarflexiója (hajlított térdnél is), láb inverzió segítése.",
    "actions": [
      { "movementId": "boka_plantarflexio", "role": "prime" },
      { "movementId": "lab_inverzio", "role": "synergist" }
    ]
  },
  {
    "id": "m_plantaris",
    "latin": "M. plantaris",
    "hungarian": "Talpi izom",
    "region": "also_vegtag",
    "group": "Lábszárizmok – felületes flexorok",
    "tier": "full",
    "origin": "Epicondylus lateralis femoris felett",
    "insertion": "Tuber calcanei (Achilles-ín medialis szélén)",
    "innervation": "N. tibialis (S1–S2)",
    "functionText": "Gyenge térdflexió és bokaplantárflexió (proprioceptív szerep).",
    "actions": [
      { "movementId": "boka_plantarflexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_popliteus",
    "latin": "M. popliteus",
    "hungarian": "Térdárokizom",
    "region": "also_vegtag",
    "group": "Lábszárizmok – mély flexorok",
    "tier": "full",
    "origin": "Epicondylus lateralis femoris, meniscus lateralis",
    "insertion": "Tibia hátsó felszíne (linea m. solei felett)",
    "innervation": "N. tibialis (L4–S1)",
    "functionText": "Nyújtott térd kireteszelése (lábszár berotáció), térdflexió megindítása.",
    "actions": [
      { "movementId": "terd_flexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_tibialis_posterior",
    "latin": "M. tibialis posterior",
    "hungarian": "Hátsó sípcsonti izom",
    "region": "also_vegtag",
    "group": "Lábszárizmok – mély flexorok",
    "tier": "core",
    "origin": "Membrana interossea, tibia és fibula hátsó felszíne",
    "insertion": "Tuberositas ossis navicularis, ossa cuneiformia, cuboideum, II–IV. metatarsus",
    "innervation": "N. tibialis (L4–L5)",
    "functionText": "Láb legerősebb inverziója (szupináció), boka plantarflexió segítése, lábboltozat fő tartója.",
    "actions": [
      { "movementId": "lab_inverzio", "role": "prime" },
      { "movementId": "boka_plantarflexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_flexor_digitorum_longus",
    "latin": "M. flexor digitorum longus",
    "hungarian": "Hosszú lábujjhajlító",
    "region": "also_vegtag",
    "group": "Lábszárizmok – mély flexorok",
    "tier": "core",
    "origin": "Tibia hátsó felszíne (linea m. solei alatt)",
    "insertion": "II–V. lábujj körömpercének talpi felszíne",
    "innervation": "N. tibialis (L5–S2)",
    "functionText": "II–V. lábujj hajlítása (flexió), boka plantarflexió és láb inverzió segítése.",
    "actions": [
      { "movementId": "labujj_flexio", "role": "prime" },
      { "movementId": "boka_plantarflexio", "role": "synergist" },
      { "movementId": "lab_inverzio", "role": "synergist" }
    ]
  },
  {
    "id": "m_flexor_hallucis_longus",
    "latin": "M. flexor hallucis longus",
    "hungarian": "Hosszú öregujjhajlító",
    "region": "also_vegtag",
    "group": "Lábszárizmok – mély flexorok",
    "tier": "core",
    "origin": "Fibula hátsó felszínének alsó 2/3-a, membrana interossea",
    "insertion": "Öregujj (I.) körömpercének talpi basisa",
    "innervation": "N. tibialis (L5–S2)",
    "functionText": "Öregujj erőteljes hajlítása (elrugaszkodás), boka plantarflexió és medialis boltozat tartása.",
    "actions": [
      { "movementId": "labujj_flexio", "role": "prime" },
      { "movementId": "boka_plantarflexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_extensor_digitorum_brevis",
    "latin": "M. extensor digitorum brevis",
    "hungarian": "Rövid lábujjfeszítő",
    "region": "also_vegtag",
    "group": "Lábhát izmai",
    "tier": "full",
    "origin": "Calcaneus felső-oldalsó felszíne",
    "insertion": "II–IV. lábujj dorsalaponeurosisa",
    "innervation": "N. fibularis profundus (L5–S1)",
    "functionText": "II–IV. lábujj extensiója.",
    "actions": [
      { "movementId": "labujj_extensio", "role": "synergist" }
    ]
  },
  {
    "id": "m_flexor_digitorum_brevis",
    "latin": "M. flexor digitorum brevis",
    "hungarian": "Rövid lábujjhajlító",
    "region": "also_vegtag",
    "group": "Talp izmai – középső csoport",
    "tier": "full",
    "origin": "Processus medialis tuberis calcanei, aponeurosis plantaris",
    "insertion": "II–V. lábujj középső percének két oldala",
    "innervation": "N. plantaris medialis (S1–S2)",
    "functionText": "II–V. lábujj hajlítása, hosszanti lábboltozat tartása.",
    "actions": [
      { "movementId": "labujj_flexio", "role": "prime" }
    ]
  },
  {
    "id": "m_abductor_hallucis",
    "latin": "M. abductor hallucis",
    "hungarian": "Öregujj-távolító izom",
    "region": "also_vegtag",
    "group": "Talp izmai – medialis csoport",
    "tier": "full",
    "origin": "Processus medialis tuberis calcanei, aponeurosis plantaris",
    "insertion": "Öregujj alappercének medialis oldala",
    "innervation": "N. plantaris medialis (S1–S2)",
    "functionText": "Öregujj abdukciója és flexiója, medialis hosszanti boltozat tartása.",
    "actions": [
      { "movementId": "labujj_flexio", "role": "synergist" }
    ]
  },
  {
    "id": "m_adductor_hallucis",
    "latin": "M. adductor hallucis",
    "hungarian": "Öregujj-közelítő izom",
    "region": "also_vegtag",
    "group": "Talp izmai – medialis csoport",
    "tier": "full",
    "origin": "II–IV. metatarsus basisa, os cuboideum (cap. obl.); III–V. MTP tok (cap. transv.)",
    "insertion": "Öregujj alappercének lateralis oldala",
    "innervation": "N. plantaris lateralis – r. profundus (S2–S3)",
    "functionText": "Öregujj addukciója, haránt lábboltozat legfőbb aktív tartója.",
    "actions": []
  }
];
