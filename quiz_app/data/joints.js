window.AnatomiaApp = window.AnatomiaApp || {};
window.AnatomiaApp.DATA = window.AnatomiaApp.DATA || {};

window.AnatomiaApp.DATA.regions = [
  { "id": "felso_vegtag", "name": "Felső végtag", "short": "Felső végtag", "icon": "💪" },
  { "id": "also_vegtag", "name": "Alsó végtag", "short": "Alsó végtag", "icon": "🦵" },
  { "id": "torzs", "name": "Törzs (hát, has, mellkas)", "short": "Törzs", "icon": "🫁" },
  { "id": "nyak", "name": "Nyak", "short": "Nyak", "icon": "🧣" },
  { "id": "fej", "name": "Fej (rágás)", "short": "Fej", "icon": "🧠" }
];

window.AnatomiaApp.DATA.joints = [
  { "id": "allkapocs", "region": "fej", "latin": "Art. temporomandibularis", "hungarian": "Állkapocs (rágóízület)", "chain": "torzs_fej" },
  { "id": "nyak", "region": "nyak", "latin": "Columna vertebralis cervicalis", "hungarian": "Nyak és fej", "chain": "torzs_fej" },
  { "id": "torzs", "region": "torzs", "latin": "Columna vertebralis thoracolumbalis", "hungarian": "Törzs (gerinc)", "chain": "torzs_fej" },
  { "id": "mellkas", "region": "torzs", "latin": "Thorax (légzés)", "hungarian": "Mellkas / légzés", "chain": "torzs_fej" },
  { "id": "vallov", "region": "felso_vegtag", "latin": "Cingulum membri superioris", "hungarian": "Vállöv (lapocka)", "chain": "felso_vegtag" },
  { "id": "vall", "region": "felso_vegtag", "latin": "Art. humeri", "hungarian": "Vállízület", "chain": "felso_vegtag" },
  { "id": "konyok", "region": "felso_vegtag", "latin": "Art. cubiti", "hungarian": "Könyökízület", "chain": "felso_vegtag" },
  { "id": "alkar", "region": "felso_vegtag", "latin": "Art. radioulnaris", "hungarian": "Alkar forgása", "chain": "felso_vegtag" },
  { "id": "csuklo", "region": "felso_vegtag", "latin": "Art. radiocarpalis", "hungarian": "Csuklóízület", "chain": "felso_vegtag" },
  { "id": "kez_ujjak", "region": "felso_vegtag", "latin": "Art. manus (digiti & pollex)", "hungarian": "Kézujjak és hüvelykujj", "chain": "felso_vegtag" },
  { "id": "csipo", "region": "also_vegtag", "latin": "Art. coxae", "hungarian": "Csípőízület", "chain": "also_vegtag" },
  { "id": "terd", "region": "also_vegtag", "latin": "Art. genus", "hungarian": "Térdízület", "chain": "also_vegtag" },
  { "id": "boka", "region": "also_vegtag", "latin": "Art. talocruralis", "hungarian": "Bokaízület", "chain": "also_vegtag" },
  { "id": "lab_boltozat", "region": "also_vegtag", "latin": "Art. subtalaris / tarsi", "hungarian": "Lábfej forgása", "chain": "also_vegtag" },
  { "id": "labujjak", "region": "also_vegtag", "latin": "Art. pedis (digiti & hallux)", "hungarian": "Lábujjak és öregujj", "chain": "also_vegtag" }
];
