window.AnatomiaApp = window.AnatomiaApp || {};
window.AnatomiaApp.DATA = window.AnatomiaApp.DATA || {};

window.AnatomiaApp.DATA.scenarios = [
  {
    "id": "sc_guggolas_felallas",
    "category": "sport",
    "title": "Guggolásból felállás (koncentrikus fázis)",
    "description": "Mély guggolásból erőteljesen felállsz: kiegyenesíted a csípődet és a térdedet, miközben a bokáddal enyhén eltolod magad a talajtól.",
    "regions": ["also_vegtag"],
    "movementIds": ["csipo_extensio", "terd_extensio", "boka_plantarflexio"],
    "note": "A hármas nyújtás (triple extension) az atlétika, ugrás és guggolás alapja."
  },
  {
    "id": "sc_fekvotamasz_fel",
    "category": "sport",
    "title": "Fekvőtámasz – kinyomás felfelé",
    "description": "A talajról kinyomod magad fekvőtámaszban: a felkarodat előre-befelé szorítod, kinyújtod a könyöködet, és a végén enyhén előretolod a lapockáidat.",
    "regions": ["felso_vegtag"],
    "movementIds": ["vall_anteflexio", "vall_addukcio", "konyok_extensio", "vallov_protrakcio"],
    "note": "A m. pectoralis major, m. deltoideus (elülső), m. triceps brachii és m. serratus anterior közös munkája."
  },
  {
    "id": "sc_huzodzkodas_alsófogas",
    "category": "sport",
    "title": "Húzódzkodás alsó fogással (chin-up) – felhúzás",
    "description": "Függeszkedésből felhúzod az állad a rúd fölé tenyérrel magad felé néző fogással: erősen markolsz, behajlítod a könyöködet, és hátra-lefelé húzod a felkarodat.",
    "regions": ["felso_vegtag"],
    "movementIds": ["vall_retroflexio", "konyok_flexio", "alkar_szupinacio", "ujjak_flexio"],
    "note": "Szupinált alkarhelyzetben a m. biceps brachii különösen hatékonyan tudja hajlítani a könyököt."
  },
  {
    "id": "sc_huzodzkodas_szeles",
    "category": "sport",
    "title": "Széles fogású húzódzkodás – felhúzás",
    "description": "Széles, tenyérrel előre néző fogással húzod fel magad a rúdra: oldalról a törzsed felé húzod a karjaidat, behajlítod a könyököd és összezárod/lenyomod a lapockáidat.",
    "regions": ["felso_vegtag"],
    "movementIds": ["vall_addukcio", "konyok_flexio", "vallov_depresszio"],
    "note": "A m. latissimus dorsi, m. teres major és az alsó trapezius fő gyakorlata."
  },
  {
    "id": "sc_pohar_emeles",
    "category": "hetkoznapi",
    "title": "Pohár szájhoz emelése",
    "description": "Az asztalról a szádhoz emelsz egy poharat: előreemeled a karodat, behajlítod a könyöködet és enyhén felfelé fordítod a tenyeredet.",
    "regions": ["felso_vegtag"],
    "movementIds": ["vall_anteflexio", "konyok_flexio", "alkar_szupinacio"],
    "note": "A m. biceps brachii mindhárom mozgáskomponensben részt vesz!"
  },
  {
    "id": "sc_csavarhuzo_becsavaras",
    "category": "hetkoznapi",
    "title": "Csavar becsavarása jobb kézzel",
    "description": "Jobb kézzel szorosan megfogod a csavarhúzót és óramutató járásával megegyező irányba erőteljesen elforgatod az alkarodat (tenyérrel felfelé fordítva).",
    "regions": ["felso_vegtag"],
    "movementIds": ["alkar_szupinacio", "ujjak_flexio"],
    "note": "Ezért erősebb a jobbkezeseknek a csavarok becsavarása: a m. biceps brachii + m. supinator szupináló ereje nagyobb, mint a pronátoroké!"
  },
  {
    "id": "sc_viz_kiontes",
    "category": "hetkoznapi",
    "title": "Víz kiöntése kancsóból",
    "description": "Megfogod a kancsó fülét, enyhén oldalra emeled a karodat, és befelé-lefelé fordítod az alkarodat, hogy a víz kifolyjon.",
    "regions": ["felso_vegtag"],
    "movementIds": ["vall_abdukcio", "alkar_pronacio", "ujjak_flexio"],
    "note": "A m. pronator teres és a m. pronator quadratus végzi az alkar borintását."
  },
  {
    "id": "sc_bicepsz_hajlitas",
    "category": "sport",
    "title": "Kézi súlyzós bicepsz-hajlítás forgatással",
    "description": "Állva felhúzod a kézi súlyzót a vállad felé, miközben tenyérrel felfelé fordítod az alkarodat és stabilan tartod a csuklódat.",
    "regions": ["felso_vegtag"],
    "movementIds": ["konyok_flexio", "alkar_szupinacio"],
    "note": "A m. biceps brachii mellett a m. brachialis és a m. brachioradialis is erőteljesen dolgozik."
  },
  {
    "id": "sc_evezes_huzas",
    "category": "sport",
    "title": "Ülő evezés – húzási fázis",
    "description": "A kábelt a hasadhoz húzod: hátrahúzod a felkarjaidat a törzsed mellé, behajlítod a könyöködet és erőteljesen összezárod a lapockáidat.",
    "regions": ["felso_vegtag"],
    "movementIds": ["vall_retroflexio", "konyok_flexio", "vallov_retrakcio"],
    "note": "Klasszikus hát-erősítő kombináció: latissimus dorsi, rhomboideusok, középső trapezius és hátsó deltoideus."
  },
  {
    "id": "sc_vall_nyomas",
    "category": "sport",
    "title": "Fej fölé nyomás (vállból nyomás)",
    "description": "A súlyzót a válladtól magasra a fejed fölé nyomod: a karodat oldalra-felfelé emeled, kifelé forgatod a lapockádat és teljesen kinyújtod a könyöködet.",
    "regions": ["felso_vegtag"],
    "movementIds": ["vall_abdukcio", "vallov_kifele_rotacio", "konyok_extensio"],
    "note": "90° fölött a lapocka kifelé rotációja (serratus anterior + trapezius) nélkülözhetetlen."
  },
  {
    "id": "sc_oldalemeles",
    "category": "sport",
    "title": "Oldalemelés kézi súlyzóval (0–90°)",
    "description": "A törzsed mellől két oldalra vízszintesig emeled a karjaidat enyhén nyújtott könyökkel.",
    "regions": ["felso_vegtag"],
    "movementIds": ["vall_abdukcio"],
    "note": "Az első ~15°-ot a m. supraspinatus indítja, utána a m. deltoideus veszi át a fő munkát."
  },
  {
    "id": "sc_farzseb_nyulas",
    "category": "hetkoznapi",
    "title": "Pénztárca kivétele a hátsó zsebből",
    "description": "Hátranyúlsz a farzsebedhez: a felkarodat hátrahúzod, a törzsedhez közelíted és befelé forgatod.",
    "regions": ["felso_vegtag"],
    "movementIds": ["vall_retroflexio", "vall_addukcio", "vall_berotacio"],
    "note": "Ez pontosan a m. latissimus dorsi és a m. teres major klasszikus „farzseb-mozgása”!"
  },
  {
    "id": "sc_hajfesules_tarko",
    "category": "hetkoznapi",
    "title": "Fésülködés a tarkódon",
    "description": "Megemeled a karodat oldalra, kifelé forgatod a felkarodat és behajlítod a könyöködet, hogy elérd a tarkódat.",
    "regions": ["felso_vegtag"],
    "movementIds": ["vall_abdukcio", "vall_kirotacio", "konyok_flexio"],
    "note": "Rotátorköpeny-sérülésnél (pl. m. infraspinatus / supraspinatus) ez a mozdulat szokott elsőként fájni."
  },
  {
    "id": "sc_szkander",
    "category": "sport",
    "title": "Szkander (karbirkózás) – támadó fázis",
    "description": "Könyökre támaszkodva erőteljesen befelé forgatod a felkarodat, szorosan markolsz, és tenyér felé behajlítod a csuklódat.",
    "regions": ["felso_vegtag"],
    "movementIds": ["vall_berotacio", "csuklo_palmarflexio", "ujjak_flexio"],
    "note": "A m. subscapularis és m. pectoralis major a fő berotátorok."
  },
  {
    "id": "sc_box_utes",
    "category": "sport",
    "title": "Egyenes ökölütés (jab) befejezése",
    "description": "Ökölbe szorított kézzel előre lendíted a karodat, villámgyorsan kinyújtod a könyöködet, tenyérrel lefelé csavarod az alkarod és előretolod a lapockádat.",
    "regions": ["felso_vegtag"],
    "movementIds": ["vall_anteflexio", "konyok_extensio", "alkar_pronacio", "vallov_protrakcio"],
    "note": "A m. serratus anteriort nem véletlenül hívják „bokszolóizomnak”!"
  },
  {
    "id": "sc_toll_fogas",
    "category": "hetkoznapi",
    "title": "Toll megfogása és csukló stabilizálása íráshoz",
    "description": "A hüvelykujjadat szembehelyezed a mutató- és középső ujjaddal, miközben enyhén hátrafeszíted a csuklódat.",
    "regions": ["felso_vegtag"],
    "movementIds": ["huvelyk_oppozicio", "csuklo_dorsalflexio"],
    "note": "A m. opponens pollicis nélkül lehetetlen lenne a precíziós csippentő fogás."
  },
  {
    "id": "sc_zongora_oktav",
    "category": "hetkoznapi",
    "title": "Nagy akkord átfogása zongorán",
    "description": "Kinyújtod és maximálisan szétterpeszted az összes kézujjadat, miközben a tenyered lefelé néz.",
    "regions": ["felso_vegtag"],
    "movementIds": ["ujjak_extensio", "ujjak_abdukcio", "alkar_pronacio"],
    "note": "Az ujjak terpesztését a kézháti csontközti izmok (DAB = Dorsales ABdukálnak) végzik."
  },
  {
    "id": "sc_papirlap_ujjak",
    "category": "hetkoznapi",
    "title": "Papírlap megtartása nyújtott ujjak között",
    "description": "Kinyújtott ujjakkal erősen összezárod az ujjaidat, hogy ne csússzon ki közülük egy papírlap.",
    "regions": ["felso_vegtag"],
    "movementIds": ["ujjak_extensio", "ujjak_addukcio"],
    "note": "PAD = Palmares interossei ADdukálnak (n. ulnaris vizsgálatnál használt klinikai teszt!)."
  },
  {
    "id": "sc_vallvonogatas",
    "category": "hetkoznapi",
    "title": "„Nem tudom” vállvonogatás",
    "description": "Mindkét válladat magasra felhúzod a füled irányába.",
    "regions": ["felso_vegtag"],
    "movementIds": ["vallov_elevacio"],
    "note": "A m. trapezius felső része és a m. levator scapulae a fő vállöv-emelők."
  },
  {
    "id": "sc_kalapacs_utes",
    "category": "hetkoznapi",
    "title": "Szög beverése kalapáccsal (lecsapás)",
    "description": "Kalapácsot markolva gyorsan kinyújtod a könyöködet és a kisujjad irányába billented a csuklódat.",
    "regions": ["felso_vegtag"],
    "movementIds": ["konyok_extensio", "csuklo_ulnarabdukcio", "ujjak_flexio"],
    "note": "Az ulnarabdukciót a m. flexor és extensor carpi ulnaris együttesen végzi."
  },
  {
    "id": "sc_kalapacs_emeles",
    "category": "hetkoznapi",
    "title": "Kalapács felemelése ütés előtt",
    "description": "Behajlítod a könyöködet középhelyzetű alkarral, és a hüvelykujjad irányába billented fel a csuklódat.",
    "regions": ["felso_vegtag"],
    "movementIds": ["konyok_flexio", "csuklo_radialabdukcio"],
    "note": "Középállású alkarnál a m. brachioradialis különösen erősen segíti a könyökflexiót."
  },
  {
    "id": "sc_lepcso_fellepes",
    "category": "hetkoznapi",
    "title": "Lépcsőfokra fellépés – láb felemelése",
    "description": "Felemeled a lábadat a következő lépcsőfokra: magasra emeled a combodat, behajlítod a térdedet, és felfelé húzod a lábfejedet, hogy ne akadjon el a lépcső szélében.",
    "regions": ["also_vegtag"],
    "movementIds": ["csipo_flexio", "terd_flexio", "boka_dorsalflexio"],
    "note": "A n. fibularis sérülésekor kiesik a boka dorsalflexiója („lógó lábfej”), ezért ilyenkor beleakad a lábujj a lépcsőbe."
  },
  {
    "id": "sc_szekrol_felallas",
    "category": "hetkoznapi",
    "title": "Felállás alacsony székről",
    "description": "Ülő helyzetből kézhasználat nélkül felállsz: erőteljesen kiegyenesíted a térdedet és a csípődet.",
    "regions": ["also_vegtag"],
    "movementIds": ["terd_extensio", "csipo_extensio"],
    "note": "A m. quadriceps femoris és a m. gluteus maximus a két fő antigravitációs izom."
  },
  {
    "id": "sc_foci_rugas",
    "category": "sport",
    "title": "Focilabda elrúgása rüszttel",
    "description": "Hátrahúzott lábból előrelendíted a combodat, nagy erővel kinyújtod a térdedet és spiccelve kifeszíted a bokádat.",
    "regions": ["also_vegtag"],
    "movementIds": ["csipo_flexio", "terd_extensio", "boka_plantarflexio"],
    "note": "A m. rectus femoris egyszerre hajlítja a csípőt és nyújtja a térdet!"
  },
  {
    "id": "sc_foci_belso_passz",
    "category": "sport",
    "title": "Focilabda passzolása belsővel",
    "description": "Kifelé fordítod a combodat csípőből, és a tested középvonala felé lendíted a lábadat a passzhoz, miközben a bokádat felfelé tartod.",
    "regions": ["also_vegtag"],
    "movementIds": ["csipo_kirotacio", "csipo_addukcio", "boka_dorsalflexio"],
    "note": "A belső comb adduktorai (adductor longus/magnus, gracilis) erőteljesen terhelődnek ennél a mozdulatnál."
  },
  {
    "id": "sc_torokules",
    "category": "hetkoznapi",
    "title": "Törökülés felvétele",
    "description": "Ülés közben felhúzod a lábaidat: behajlítod a csípődet, oldalra nyitod és kifelé fordítod a combodat, miközben behajlítod a térdedet.",
    "regions": ["also_vegtag"],
    "movementIds": ["csipo_flexio", "csipo_abdukcio", "csipo_kirotacio", "terd_flexio"],
    "note": "Ez pontosan a m. sartorius (szabóizom) mind a négy kombinált funkciója!"
  },
  {
    "id": "sc_labujjhegy_polc",
    "category": "hetkoznapi",
    "title": "Magas polc elérése lábujjhegyen nyújtózva",
    "description": "Lábujjhegyre emelkedsz, közben a fejed fölé előreemeled a karodat és kinyújtod a könyöködet.",
    "regions": ["also_vegtag", "felso_vegtag"],
    "movementIds": ["boka_plantarflexio", "vall_anteflexio", "konyok_extensio"],
    "note": "Egész testes mozdulat: a triceps surae (gastrocnemius + soleus) emeli a sarkat."
  },
  {
    "id": "sc_sarkon_jaras",
    "category": "hetkoznapi",
    "title": "Sarkon járás (pipáló lábfejjel)",
    "description": "A sarkaidon lépkedsz úgy, hogy a lábfejedet és a lábujjaidat magasra felfelé húzod a padlótól.",
    "regions": ["also_vegtag"],
    "movementIds": ["boka_dorsalflexio", "labujj_extensio"],
    "note": "A m. tibialis anterior és a hosszú lábujjfeszítők (n. fibularis profundus) klinikai tesztje."
  },
  {
    "id": "sc_oldalra_labemeles",
    "category": "sport",
    "title": "Oldalsó lábemelés (csípőtávolítás)",
    "description": "Oldalt fekve vagy állva nyújtott térddel oldalra megemeled a lábadat a test középvonalától.",
    "regions": ["also_vegtag"],
    "movementIds": ["csipo_abdukcio", "terd_extensio"],
    "note": "A m. gluteus medius és minimus erősítése kulcsfontosságú a medence járás közbeni stabilitásához."
  },
  {
    "id": "sc_lab_comb_szoritas",
    "category": "sport",
    "title": "Pilates-labda összeszorítása térdek között",
    "description": "Ülve vagy háton fekve erősen összeszorítod a combjaidat egy közéjük tett labda ellenében.",
    "regions": ["also_vegtag"],
    "movementIds": ["csipo_addukcio"],
    "note": "Az adductor magnus, longus, brevis, gracilis és pectineus fő funkciója."
  },
  {
    "id": "sc_boka_befele_forditas",
    "category": "hetkoznapi",
    "title": "Talp megvizsgálása (talp befelé fordítása)",
    "description": "Leülve behajlítod a térdedet, majd befelé fordítod a talpadat, hogy megnézd, nem léptél-e szálkába.",
    "regions": ["also_vegtag"],
    "movementIds": ["terd_flexio", "lab_inverzio"],
    "note": "A m. tibialis posterior és anterior a két legfontosabb inverziót végző izom."
  },
  {
    "id": "sc_korcsolya_elrugaszkodas",
    "category": "sport",
    "title": "Korcsolyázás – hátra-oldalra eltolás",
    "description": "Hátra- és oldalirányba eltolod magad a jégen: feszíted és oldalra távolítod a csípődet, kinyújtod a térdedet, és enyhén kifelé billented a talpadat.",
    "regions": ["also_vegtag"],
    "movementIds": ["csipo_extensio", "csipo_abdukcio", "terd_extensio", "lab_everzio"],
    "note": "A talp everzióját a m. fibularis (peroneus) longus és brevis végzi."
  },
  {
    "id": "sc_torolkozo_labujj",
    "category": "sport",
    "title": "Lúdtalp-torna: törölköző markolása lábujjakkal",
    "description": "Mezítláb begörbíted a lábujjaidat, hogy magad alá gyűrd a padlón lévő törölközőt, miközben megemeled a belső talpszéledet.",
    "regions": ["also_vegtag"],
    "movementIds": ["labujj_flexio", "lab_inverzio"],
    "note": "Kiválóan erősíti a lábboltozatot tartó mély flexorokat és a talp izmait."
  },
  {
    "id": "sc_felules_csavarassal",
    "category": "sport",
    "title": "Hasprés törzscsavarással (biciklis hasizom)",
    "description": "Háton fekve megemeled a válladat a talajról és oldalra csavarod a felsőtestedet, miközben az ellentétes térdedet a hasad felé húzod.",
    "regions": ["torzs", "also_vegtag"],
    "movementIds": ["torzs_flexio", "torzs_rotacio", "csipo_flexio"],
    "note": "Törzscsavaráskor az egyik oldali külső ferde és az ellentétes oldali belső ferde hasizom dolgozik együtt!"
  },
  {
    "id": "sc_superman_hat",
    "category": "sport",
    "title": "Hason fekvésből hátfeszítés („Superman”)",
    "description": "Hason fekve egyszerre megemeled a mellkasodat, a fejedet és a lábaidat a talajról (homorítasz).",
    "regions": ["torzs", "nyak", "also_vegtag"],
    "movementIds": ["torzs_extensio", "nyak_extensio", "csipo_extensio"],
    "note": "A teljes hátsó izomlánc (erector spinae, gluteus maximus, hamstringek, tarkóizmok) aktiválódik."
  },
  {
    "id": "sc_borond_oldalra",
    "category": "hetkoznapi",
    "title": "Oldalra hajolás nehéz táskáért",
    "description": "Állva derékból oldalra hajolsz a földre tett bőrönd felé, majd ellenoldali izmokkal visszahúzod magad.",
    "regions": ["torzs"],
    "movementIds": ["torzs_lateralflexio"],
    "note": "A m. quadratus lumborum és a ferde hasizmok a fő oldalra hajlítók."
  },
  {
    "id": "sc_tolatas_hatranezes",
    "category": "hetkoznapi",
    "title": "Hátranézés autóval tolatáskor",
    "description": "A kormánynál ülve elfordítod a fejedet és megcsavarod a felsőtestedet hátrafelé, hogy kiláss a hátsó ablakon.",
    "regions": ["nyak", "torzs"],
    "movementIds": ["nyak_rotacio", "torzs_rotacio"],
    "note": "A fej elfordításánál az ellenoldali m. sternocleidomastoideus és az azonos oldali m. splenius capitis működik együtt."
  },
  {
    "id": "sc_telefon_vall",
    "category": "hetkoznapi",
    "title": "Telefon megtartása fül és váll között",
    "description": "A fejedet oldalra döntöd a vállad felé, miközben felhúzod a válladat, hogy kéz nélkül tartsd a telefont.",
    "regions": ["nyak", "felso_vegtag"],
    "movementIds": ["nyak_lateralflexio", "vallov_elevacio"],
    "note": "Tipikus túlterhelés a m. levator scapulae és a felső m. trapezius számára!"
  },
  {
    "id": "sc_mely_lelegzet",
    "category": "hetkoznapi",
    "title": "Mély sóhaj / teljes belégzés edzés után",
    "description": "Teleszívod a tüdődet levegővel: lesüllyed a rekeszed és megemelkedik a mellkasod.",
    "regions": ["torzs"],
    "movementIds": ["legzes_belegzes"],
    "note": "Nyugalomban a diaphragma végzi a munka nagy részét, erőltetve a külső bordaköziek és a nyaki segédizmok is besegítenek."
  },
  {
    "id": "sc_lufi_fujas",
    "category": "hetkoznapi",
    "title": "Lufi felfújása (erőltetett kilégzés)",
    "description": "Nagy nyomással, hasad megfeszítésével préseled ki a levegőt a tüdődből egy lufiba.",
    "regions": ["torzs"],
    "movementIds": ["legzes_kilegzes"],
    "note": "A nyugodt kilégzés passzív, de az erőltetett kilégzéshez a hasizmok és a belső bordaközi izmok aktív összehúzódása kell."
  },
  {
    "id": "sc_alma_harapas",
    "category": "hetkoznapi",
    "title": "Nagy falat leharapása egy almából",
    "description": "Először nagyra kinyitod a szádat, majd a rágás fő fázisában erőteljesen összezárod az állkapcsodat, hogy átharapd az almát.",
    "regions": ["fej"],
    "movementIds": ["allkapocs_elevacio"],
    "note": "A m. masseter testtömegéhez képest az emberi test egyik legerősebb izma."
  },
  {
    "id": "sc_asitas_nyitas",
    "category": "hetkoznapi",
    "title": "Nagy ásítás (állkapocs nyitása és előrecsúszása)",
    "description": "Nagyra tátod a szádat, miközben az alsó állkapcsod lefelé süllyed és kissé előrecsúszik.",
    "regions": ["fej"],
    "movementIds": ["allkapocs_depresszio", "allkapocs_protrusio"],
    "note": "A m. pterygoideus lateralis indítja el a szájnyitást az állkapocsfej előrehúzásával."
  }
];
