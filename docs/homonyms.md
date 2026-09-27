# Shared names

Homer gives the same name to different people and places, and some names are also common words.
Each entry claims only its own lines. This list records the clashes met so far and how the patterns
keep them apart, and warns about those that later books will bring. Add each new book's clashes.

## Names that are also common words

Use `^` (only when capitalized), so that the clash never recurs:

| Name | Common word | Entry and pattern |
|---|---|---|
| Ὕλη, the Boeotian town | ὕλη "forest" | hyle: `^Ὕλην` |
| Λᾶας, the Laconian town | λᾶας "stone" | laas: `^Λάαν` |
| Αἰπύ, the Pylian town | αἰπύς "steep" | aepy: `^Αἰπὺ` |
| Ζεύς | ζεύγνυμι "yoke" (3.260) | zeus: `^Ζευ*` |
| Πάρις | παρίστημι (3.249, 3.405) | paris: `^Πάρι*` |
| Σκαιαὶ πύλαι | σκαιός "left" (1.501) | scaean-gates: `^Σκαι*` |
| Λάμπος, the Trojan elder | λάμπω "shine" | lampus: `^Λάμπον` |
| Αἴθρη, Helen's handmaid | αἴθρη "clear sky" (17.646) | aethra: `^Αἴθρη` |
| Κραναή, the island | κραναός "craggy" (3.201) | cranae: `^Κραναῇ`; craggy: the form κραναῆς only |
| Θόας | θοός "swift" | thoas: exact forms; swift-ships: `"!^Θόας"` |
| Λεῦκος, Odysseus' companion | λευκός "white" (4.434) | leucus: `^Λεῦκον` |
| Ἀγήνωρ, son of Antenor | ἀγήνωρ "bold" (θυμὸς ἀγήνωρ, 2.276) | agenor: `^Ἀγήνωρ` |
| Αἰνόθεν, "from Aenus" | αἰνόθεν "terribly" (7.97) | aenus: `^Αἰνόθεν` |
| Ἀθήνη | Ἀθῆναι Athens, Ἀθηναῖοι Athenians | athena: exclusions `"!Ἀθήνας"`, `"!=Ἀθήνῃς"`, `"!Ἀθηναιο*"`, `"!Ἀθηναιω*"` |
| Ποδάρκης, the man | ποδάρκης, Achilles' epithet | podarces: `^Ποδάρκης`; podarkes: `except: [2.704]` |
| Χείρων, the Centaur | χειρῶν "of hands" (5.506, 5.582, 5.657) | chiron: `^Χείρων` |
| Αἵμων, Nestor's captain | αἵμων "skilled" (αἵμονα θήρης, 5.49) | haemon: `^Αἵμονα` |
| Χρύσης, Χρύση | χρυσῆν, χρυσῇ "golden" (5.425, 5.427) | chryses: `^Χρύσης`, `^Χρύση`, `^Χρύσην`; chryse: `^Χρύσην` |
| Ἄρτεμις | ἀρτεμής "unhurt" (5.515, 7.308) | artemis: `^Ἄρτεμ*` |
| Ἄρης | ἀρή "bane" (ἀρῆς, 14.485, 18.100) | ares: capitalized forms (`^Ἄρης`, `^Ἄρῃ`, `^Ἄρηʼ`) |
| Ἀΐδης, Ἀϊδωνεύς | ἀΐδηλος "destructive" (5.880, 5.897) | hades: exact forms only, no stem |
| Ἀλκή, Ἰωκή on the aegis (5.740) | ἀλκή "courage", ἰωκή "onslaught" (5.521) | courage: `^Ἀλκή`; onslaught: `^Ἰωκή`; alke: `"!^Ἀλκ*"` |
| Κυδοιμός, Tumult (5.593) | κυδοιμός "din" (10.523, 11.538) | tumult: `^Κυδοιμ*` |
| Παιήων, the gods' healer | παιήων "paean" (1.473, 22.391) | paeeon: `^Παιήων`, `^Παιήον*` |
| Ὧραι, the Hours | ὧραι "seasons" | hours: `^Ὧραι` |
| Ἀκάμας, the Thracian (5.462) | ἀκάμας "tireless" (16.176) | acamas-of-thrace: `^Ἀκάμαντι` |
| Ἀγχίαλος, the man (5.609) | ἀγχίαλος "by the sea" (2.640, 2.697) | anchialus: `^Ἀγχίαλον`; by-the-sea: `"!^Ἀγχίαλ*"` |
| Κοίρανος, the Lycian (5.677) | κοίρανος "lord" | coeranus-of-lycia; koiranos: `"!^Κοίραν*"` |
| Ἅλιος, the Lycian (5.678) | ἅλιος "in vain" | halius: `^Ἅλιον` |
| Νοήμων, the Lycian (5.678) | νοήμων "thoughtful" (Od. 2.282) | noemon-of-lycia: `^Νοήμονα` |
| Ἄξυλος, the man of Arisbe (6.12) | ἄξυλος "thick-wooded" (ἐν ἀξύλῳ … ὕλῃ, 11.155) | axylus: `^Ἄξυλον` |
| Ἀλήϊον πεδίον, the Aleian plain (6.201) | ἀλήϊος "landless" (9.125, 9.267) | aleian-plain: `^Ἀλήϊον` |
| Χίμαιρα, the monster (6.179, 16.328) | χίμαιρα "she-goat" (6.181, of the Chimaera's middle) | chimaera: `^Χίμαιραν` |
| Γλαφύραι, the Thessalian town (2.712) | γλαφυράς "hollow", of ships | hollow-ships: `"!^Γλαφύρας"` |

Common words can also catch each other. In Book 5: εἴσατο "went" (5.538) is not εἴσατο "seemed" (eidos: `except: [5.538]`); ὀξὺ νόησε "was quick to see" (3.374, 5.312, 5.680) is not the epithet "sharp" (sharp: `"!ὀξὺ νόησε"`); νέμεσθαι "to graze" (5.777) is not νέμεσις (nemesis: `"!νέμεσθαι"`); ἑκηβολίαι, Scamandrius' skill with the bow (5.54), is not Apollo the far-shooter (apollo: `except: [5.54]`).

## Peoples whose forms differ only by accent

| Forms | Entries |
|---|---|
| Τρῶες, Τρῶας "Trojans" and Τρῳαί, Τρῳάς "Trojan women" | trojans: `[Τρώ*, "!=Τρῳ*", "+Τρῳὰς δὲ στίχας"]`; trojan-women: `["=Τρῳ*"]`, `except: [5.461]`. At 5.461 Τρῳὰς στίχας are "the Trojan ranks", which the forced pattern (`+`) gives back to trojans. Later books use the Τρῳ- forms for things as well as women: Trojan mares (16.393), Trojan dogs (17.127, 17.255, 17.273, 18.179), the horses of Tros (Τρῳοὺς ἵππους, 23.291); give each to the right entry. Later books also add Τρωϊάδες, which trojans will need to exclude. |
| Τρώς "Trojan" and Τρώς, Tros the king | trojans claims Τρώ*; tros has `^Τρωΐ` and Τρώϊοι (the horses of Tros, 5.222, 5.265), and trojans excepts those lines. Tros returns as Τρῶα, Τρωός (20.230–231), and a Tros son of Alastor (20.463) will need his own id. |

## People who share a name

| Name | Entries (lines) |
|---|---|
| Αἴας | ajax, Telamonian Ajax; ajax-son-of-oileus (2.527) |
| Λυκάων | lycaon, father of Pandarus (2.826, 4.89, 4.93, 5.95–283, Λυκάων 5.197; `except: [3.333]`); lycaon-son-of-priam (3.333, Book 21; `except` every line of Pandarus' father, 2.826 to 5.283) |
| Αἵμων | haemon, Nestor's captain (4.296); haemon-of-thebes, father of Maeon (4.394) |
| Εὐρυμέδων | eurymedon, Agamemnon's charioteer (4.228); Nestor's attendant of the same name (8.114, 11.620: `Εὐρυμέδων` will catch both), and a king of the Giants (Od. 7.58) |
| Αἵμων (again) | Αἱμονίδαο (17.467) is the father of Laerces, a third Haemon |
| Ἀντηνορίδης | helicaon (3.123), laodocus (4.87: laodocus claims the exact dative Ἀντηνορίδῃ, which a later book may use of another son), and Antenor's other sons in later books (Agenor is named directly, 4.467) |
| Λαόδοκος | laodocus, son of Antenor (4.87); a companion of Antilochus with the same name (17.699) will need his own id |
| Χρομίος | chromius, Nestor's captain (4.295; `except: [5.160, 5.677]`); chromius-son-of-priam (5.160); chromius-of-lycia (5.677); later a Trojan (8.275), an ally (17.218, 17.494, 17.534), Nestor's brother (Od. 11.286): `Χρομίον` will catch 8.275 and 17.218 |
| Ἀλάστωρ | alastor, Nestor's captain (4.295; `except: [5.677]`); alastor-of-lycia (5.677); later an Achaean (8.333 = 13.422) and the father of Tros (20.463) |
| Βίας | bias, Nestor's captain (4.296); an Athenian (13.691), the father of Laogonus and Dardanus (20.460) |
| Πελάγων | pelagon, Nestor's captain (Πελάγοντα, 4.295); pelagon-of-lycia (Πελάγων, 5.695) |
| Ἐχέπωλος | echepolus, son of Thalysias (4.458); Echepolus son of Anchises gives Agamemnon a mare (23.296) |
| Διώρης | diores, the Epeian (2.622, 4.517; exact forms only); Διώρεος, Automedon's father (17.429, 17.474) |
| Ἄντιφος (again) | Book 11 brings Antiphus son of Priam back (11.101–109): antiphus and antiphus-of-maeonia will need `except: [11.104]`, and antiphus-son-of-priam the form Ἄντιφον |
| Ἀγήνωρ (again) | Echeclus, "son of Agenor" (20.474), may be a different Agenor |
| Πείρως, Πείρεως | peirous (2.844, 4.520, 4.525); Rhigmus "son of Peireos" (20.484–485) may be his son |
| Ἰδαῖος | idaeus, Priam's herald (Books 3, 7, 24; `except: [5.11, 5.20]`); idaeus-son-of-dares (5.11, 5.20), who will need `except` for the herald's lines (7.276, 7.278, 7.372, 7.381, 7.413, 7.416, 24.325) |
| Ἀντηνορίδης | helicaon (3.123); Antenor has many other sons in later books (Agenor, Coön, Iphidamas…) |
| Εὐρυβάτης | eurybates, Agamemnon's herald; eurybates-of-ithaca (2.184) |
| Ἐπίστροφος | epistrophus (2.517), epistrophus-of-lyrnessus (2.692), epistrophus-of-the-halizones (2.856) |
| Ἀμφίμαχος | amphimachus (2.620), amphimachus-of-caria (2.870–871) |
| Ἄντιφος | antiphus (2.678), antiphus-of-maeonia (2.864), antiphus-son-of-priam (4.489; Book 11 again) |
| Ἀκάμας | acamas, son of Antenor (2.823), acamas-of-thrace (2.844; `^Ἀκάμαντʼ` at 6.8, which will catch Antenor's son at 11.60) |
| Ἄδρηστος | adrastus, king of Sicyon (2.572), and adrestus, son of Merops (2.830), both `except: [6.45]`; adrastus-the-trojan, taken alive by Menelaus and killed by Agamemnon (Ἄδρηστον, Ἄδρηστος, 6.37–65; `except: [2.572, 2.830]`). Another Trojan Adrastus is killed by Patroclus (16.694) |
| Εὔρυτος | eurytus (2.596, 2.730), eurytus-of-elis (2.621) |
| Εὐρύπυλος | eurypylus-of-cos (2.677), eurypylus (2.736) |
| Ἄκτωρ | actor-son-of-azeus (2.513), actor-of-elis (2.621) |
| Κλυμένη | clymene, Helen's handmaid (3.144); a Nereid (18.47) and a heroine of the Odyssey (11.326) |
| Κλυτίος, Ἱκετάων, Πάνθοος | the Trojan elders of 3.146–148, who are also fathers of warriors in later books (Caletor, Melanippus, Euphorbus and Polydamas): the same men, so their entries gain notes, not new ids |
| Ξάνθος | xanthus-son-of-phaenops (5.152; `except: [5.479, 6.172]`); xanthus-of-lycia, the river (2.877, 5.479); later the Trojan river Xanthus, that is the Scamander (14.434, 21.2: `=Ξάνθου` on xanthus-of-lycia will catch them), and horses of Hector (8.185) and Achilles (16.149, 19.400) |
| Θόων | thoon-son-of-phaenops (5.152); Trojans of the same name (11.422, 12.140, 13.545) |
| Φαῖνοψ | phaenops, father of Xanthus and Thoon (5.152); the father of Phorcys (17.312) and Phaenops son of Asius (17.583) are others |
| Ἕλενος | helenus-son-of-oenops (Ἕλενον, 5.707; it will need `except: [24.249]`, where Ἕλενον is Priam's son); helenus, Priam's son, "by far the best of the bird-seers" (6.76 …; `except: [5.707]` if a pattern catches Ἕλενον) |
| Ὀρέστης | orestes-the-achaean (5.705); Agamemnon's son (9.142, 9.284) takes the plain id orestes; a Trojan (12.139, 12.193) |
| Οἰνόμαος, Τεύθρας | oenomaus (5.706) and teuthras (5.705), killed by Hector; a Trojan Oenomaus (12.140, 13.506); Axylus is "son of Teuthras" (Τευθρανίδην, 6.13): teuthras-father-of-axylus |
| Ἄμφιος | amphius, son of Merops (Ἄμφιος, 2.830); amphius-son-of-selagus (Ἄμφιον, 5.612). Both came from (A)paesus |
| Ὀρσίλοχος | orsilochus-son-of-diocles (5.542, 5.549); Teucer's victim (8.274) |
| Ὑψήνωρ | hypsenor, son of Dolopion (5.76); Hypsenor son of Hippasus (13.411) |
| Περίφας | periphas, son of Ochesius (5.842, 5.847); the herald Periphas, son of Epytus (17.323) |
| Πολύιδος | polyidus-son-of-eurydamas (5.148); the seer of Corinth (13.663, 13.666) |
| Ἀστύνοος | astynous (5.144); Astynous son of Protiaon (15.455) |
| Μύδων, Ἀτύμνιος | mydon, son of Atymnius (5.580–581); a Paeonian Mydon (21.209) and Atymnius son of Amisodarus (16.317) are others |
| Κοίρανος, Νοήμων, Ἅλιος | coeranus-of-lycia, noemon-of-lycia and halius (5.677–678); Meriones' charioteer Coeranus (17.611), a Pylian Noemon (23.612), and Phaeacian Halius (Od. 8.119, 8.370) |
| Βῶρος | borus, father of Phaestus (5.44); Borus son of Perieres (16.177) |
| Ὦτος | otus, son of Aloeus (Ὦτος, 5.385); Otus of Cyllene (Ὦτον, 15.518) |
| Τληπόλεμος | tlepolemus, son of Heracles (2.653, 5.628); Tlepolemus son of Damastor (16.416) |
| Σκαμάνδριος | scamandrius, the hunter (5.49; `except: [2.465]`); the adjective of the Scamandrian plain (2.465, 2.467, on scamander); Astyanax, whom Hector calls Scamandrius (Σκαμάνδριον, 6.402): scamander and scamandrius `except: [6.402]`, and astyanax claims `Σκαμάνδριον` with `except: [2.465, 5.49]` |
| Φαῖστος | phaestus-son-of-borus (`=Φαῖστον`, 5.43); the Cretan town Φαιστός (2.648; `except: [5.43]`), which differs only by accent |
| Γλαῦκος | glaucus, the Lycian (2.876, 6.119 …; `except: [6.155]`); glaucus-son-of-sisyphus, Bellerophon's father, claims only the phrases `"Γλαῦκον τέκεθʼ"` and `"Γλαῦκος τίκτεν"` (6.154–155), so that it catches no later Glaucus |
| Ἱππόλοχος | hippolochus, Glaucus' father (6.119, 6.144, 6.197, 6.206; 7.13, 12.309, 12.387, 17.140); Hippolochus son of Antimachus, killed by Agamemnon (11.122, 11.145), will need his own id, and hippolochus `except: [11.122, 11.145]` |
| Δρύας | dryas, the Lapith (1.263; `except: [6.130]`); dryas-father-of-lycurgus (6.130) |
| Λυκόοργος | lycurgus, the son of Dryas who drove off the nurses of Dionysus (6.130); the Arcadian Lycurgus who killed Areithous (7.142–149) will need his own id, and lycurgus `except: [7.142, 7.144, 7.148]` |
| Αἴσηπος | aesepus, the river (2.825, 4.91); aesepus-son-of-bucolion (6.21) |
| Πήδασος | pedasus-son-of-bucolion (6.21); pedasus-on-the-satnioeis, the town of Elatus (6.35; 20.92, 21.87); Pedasus in Messenia (9.152, 9.294) and Achilles' trace horse (16.152, 16.467) will need their own ids |
| Φύλακος | phylacus, father of Iphiclus (Φυλακίδαο, 2.705); phylacus-the-trojan (6.35) |
| Μελάνθιος | melanthius-the-trojan (6.36); the goatherd of the Odyssey (Μελάνθιον, Od. 21.175, 21.265, 22.474) will take the plain id |
| Ἔλατος | elatus (6.33); a suitor Elatus (Od. 22.267) |
| Νεστορίδης | antilochus (6.33) and nestor (`Νεστορίδ*`, the patronymic rule); in the Odyssey Νεστορίδης is Peisistratus (Od. 3.36, 3.482, 4.155, 15.48, 15.166, 15.202), and antilochus will need `except` there |
| Ἀτρεΐδης | agamemnon and menelaus both; agamemnon excepts the lines where the son of Atreus is Menelaus (6.44, 6.46), and atreidae claims the pair (Ἀτρεΐδας, 6.437) |
| Αἰολίδης, Αἴολος | aeolus-father-of-sisyphus (6.154); its English "Aeolus" will clash with the Odyssey's Aeolus son of Hippotas, keeper of the winds (Od. 10.1–76) |
| Ὀφέλτιος | opheltius (6.20); an Achaean Opheltius killed by Hector (11.302) |
| Λαοδίκη | laodice, Priam's daughter (3.124, 6.252); Agamemnon's daughter Laodice (9.145, 9.287) will need her own id |
| Ἠετίων | eetion, Andromache's father (1.366, 6.395 …); Eetion of Imbros, who ransomed Lycaon (21.43); Eetion, the father of Podes (17.575, 17.590) |
| Πάνδαρος | pandarus claims `Πάνδαρ*`, which will catch Pandareus (Πανδάρεος, Od. 19.518, 20.66) once the Odyssey is added: add `"!Πανδαρε*"` |

## Places that share a name

| Name | Entries (lines) |
|---|---|
| Ἄργος | argos (2.108 …); pelasgian-argos (2.681) |
| Θήβη | thebe, Eetion's city in the Troad (1.366, 2.691; `except: [4.378, 4.406]`); thebes, Boeotian Thebes (4.378, 4.406; `except: [2.691]`); hypothebae (2.505). The forms are mixed in later books: Θήβας is Boeotian at 5.804, 10.286 and 23.679 but Egyptian at 9.381; Θήβῃσι(ν) is Boeotian at 6.223 and 14.114 but Cilician at 22.479; Θήβῃ is Boeotian at 14.323 and 19.99 but Cilician at 6.397; Θήβην is Cilician at 6.416 |
| Μίλητος | miletus-crete (2.647), miletus (2.868) |
| Αἰγιαλός | aegialus (2.575), aegialus-of-paphlagonia (2.855) |
| Σελλήεις | selleis-ephyra (2.659), selleis-arisbe (2.839) |
| Χαλκίς | chalcis (2.537), chalcis-aetolia (2.640) |
| Ὀρχομενός | orchomenus (2.511), orchomenus-arcadia (2.605) |
| Πτελεός | pteleus (2.594), pteleus-thessaly (2.697) |
| Ἕλος | helos (2.584), helos-pylos (2.594) |
| Αὐγειαί | augeiae (2.532), augeiae-laconia (2.583) |
| Ξάνθος | xanthus-of-lycia (2.877, 5.479; the phrase `"Ξάνθόν τε ῥέοντα"` at 6.172, since 5.152 also reads Ξάνθόν τε; `except: [6.4]`); the Trojan river under its gods' name Xanthus is scamander (`^Ξάνθοιο` 6.4; also 8.560, 14.434, 21.2, 21.337, 21.383; `except: [6.172]`), but Ξάνθοιο at 12.313 is the Lycian river |
| Πήδασος (the town) | pedasus-on-the-satnioeis (6.35) and pedasus-son-of-bucolion (6.21) share Πήδασον: each excepts the other's line |
| Θήβη Ὑποπλακίη | thebe claims the phrase `"Θήβῃ Ὑποπλακίῃ"` (6.397), because Θήβῃ alone is Boeotian at 14.323 and 19.99 |
| ἐρινεός, the fig tree | the-fig-tree claims `"παρʼ ἐρινεόν"` (6.433; 11.167); 22.145 (καὶ ἐρινεὸν ἠνεμόεντα) will need adding, while the fig trees of 21.37 and Od. 12.103, 12.432 are others |
| πύργος, the tower of Ilios | the-tower-of-ilios claims πύργῳ, πύργον (3.153–154, 3.384, 6.373, 6.386, 6.431); later books need `except` for a shield "like a tower" (7.219, 11.485, 17.128) and the Achaean wall (12.332–333, 12.373) |
| Φηρή, Φηραί / Φεραί | pherae-in-messenia, Diocles' town (Φηρῇ 5.543; also 9.151, 9.293, Od. 3.488, 15.186); pherae, in Thessaly (Φεράς 2.711, Od. 4.798) |
| Πύλος | pylos (5.397, "in Pylos among the dead", as Monro–Allen print it; some read ἐν πύλῳ, "at the gate") |
| Κηφισίς λίμνη / Κηφισός | cephisian-lake (5.709); cephisus, the river (2.522–523) |
| Παισός / Ἀπαισός | apaesus (Ἀπαισοῦ 2.828, `^Παισῷ` 5.612): the same town |
| Δαρδάνιαι πύλαι / Σκαιαὶ πύλαι | dardanian-gates (5.789, 22.194, 22.413); scaean-gates. They may be one gate under two names |
| φηγός, the oak of Zeus | the-oak-of-zeus (5.693, φηγόν 6.237); later books need 9.354 and 11.170, and a simile oak at 16.767 must be excepted |
| Ἐφύρη | ephyra, Astyocheia's Ephyra on the Selleis (Ἐφύρης 2.659); ephyra-in-argos, "in a corner of Argos", later Corinth (Ἐφύρη 6.152, Ἐφύρῃ 6.210) |
| Φρυγίη, Μῃονίη | phrygia and maeonia are places; phrygians and maeonians are peoples (the people's stem must not catch the land: maeonians `[Μῄο*, "!Μῃονίη*"]`, which still lets in Μῃονίς "a Maeonian woman", 4.142) |

## Epithets that also describe other things

A formulaic epithet can describe something else in a later book, where its pattern must not follow it:

| Epithet | Its other use | What to do |
|---|---|---|
| κελαινεφής, of Zeus (lord-of-dark-clouds) | of blood: 4.140, 5.798, 16.667, 21.167, Od. 11.36 (dark-blood) | `except` those lines on lord-of-dark-clouds (the word order αἷμα κελαινεφές defeats an exclusion) |
| πτερόεις, of words (winged-words) | of arrows: 4.117, 5.171, 16.773, 20.68, and of light shields, λαισήϊα πτερόεντα (5.453, 12.426) (feathered) | keep both entries to phrase patterns |
| μέλαινα, of ships (black-ships) | κῆρα μέλαιναν "black doom" (5.22, 5.652) | black-ships: `except` those lines |
| ξανθός "fair-haired" (fair-haired) | the names Ξάνθος: the river, a son of Phaenops, horses | fair-haired: `"!^Ξάνθ*"` |
| ὀξύς "sharp" (sharp) | ὀξέα κεκλήγων "screaming shrilly" (2.222); ὀξὺ νόησε "was quick to see" | sharp: `"!ὀξέα κεκλήγ*"`, `"!ὀξὺ νόησε"` |
| δαιμόνιε, δαιμονίη "strange one" (strange-one) | δαίμονι ἶσος "like a god" (5.438, 5.459, 5.884) | strange-one: `"!=δαίμονι"` |
| ἑκηβόλος, of Apollo (far-shooter) | ἑκηβολίαι, Scamandrius' skill (5.54) | far-shooter and apollo: `except: [5.54]` |
| κοῖλος, of ships (hollow-ships) | of a ravine (4.454), of Lacedaemon (2.581) | `except` the other lines on hollow-ships |
| φοῖνιξ, the purple dye (4.141) | Φοῖνιξ, Achilles' old tutor (Book 9) | purple will need `"!^Φοίνι*"` from Book 9 on |
| εὔχομαι, εὐχωλή "pray, prayer" (prayer) | the same words meaning "claim, boast": 1.91, 2.82, 2.160, 2.176, 2.597, 3.430, 4.173, 4.264, 4.405, 4.450, and in Book 5 (euchomai) | `except` the boast lines on prayer, book by book |
| εὐξ*, the prayer stem | ἐΰξοος "polished" (2.390, 4.105) | prayer: `"!ἐϋξοο*"` |
| ἰός "arrow" (arrows) | ἰόν "going" (4.278) | `except` on arrows |
| ἀγγελίη "embassy" (embassy) | "message, news" (13.252, 15.640) | `except` those lines on embassy |
| φάρμακα "drugs" (healing) | harmful drugs and poisons in the Odyssey | `except` those lines on healing |


## Common words with two senses

Entries for things and customs claim common words, and a common word can mean something else:

| Word | Its other sense | What to do |
|---|---|---|
| ἰῷ "with an arrow" (arrows) | ἰῷ "one" (6.422); ἴω "go" | arrows: `=ἰῷ`, and `except: [6.422]` in Book 6 |
| ἠρᾶτο "prayed" (prayer) | ἤρατο "won" (3.373) | prayer: `=ἠρᾶτο` |
| δοῦρα "spears" (spear) | δοῦρα "timbers" of ships (2.135) | spear: the phrase `ὀξέα δοῦρα` |
| νηός "temple" (temple) | νηός "of a ship" | ships: `except: [5.446]` |
| βοείας "oxhide shields" (shield) | oxhides (11.843) | shield: the phrase `στήθεσσι βοείας` |
| ἄντυξ, the chariot rail (chariot) | the rim of a shield (6.118, 14.412) | chariot: `except` the shield lines |
| ζυγόν "yoke" (chariot) | the crossbar of a lyre (9.187), rowing benches (Odyssey) | chariot: `except` those lines |
| προκαλίζομαι "challenge" (single-combat) | a challenge to athletic contests (4.389, 5.807) | single-combat: `except: [4.389, 5.807]`; contests takes the lines |
| εὔχομαι "boast, claim" | "pray" (prayer) | see the εὔχομαι row above |
| θεῶν, θεόν "of the gods, god" (theos) | θέων "running" (6.54), θέον "ran" (6.238) | theos: `"!=θέων"`, `"!=θέον"` |
| θείη "divine" (divine) | θείῃ "runs", of the stallion (6.507 = 15.264) | divine: `"!θείῃ πεδίοιο"` |
| ἄνα "lord", the vocative (anax: `=ἄνα`) | ἀλλʼ ἄνα "up!" (6.331, 9.247, 18.178, Od. 18.13) | anax: `except` those lines, book by book |
| εἴσατο "seemed" (eidos) | εἴσατο "went", of an arrow (4.138) | eidos: `except: [4.138]` |
| γέρουσιν "elders" (trojan-elders, 6.113) | the Achaean elders (4.344, 9.70) | trojan-elders: the form βουλευτῇσι and `refs: [6.113]`, not γέρουσιν |
| ἀμφίπολος, δμῳή "handmaid, slave woman" (handmaids) | ἀμφιπολεύω "tend" (Odyssey); δμωῇσι printed without the iota subscript (9.658) | handmaids: `"!ἀμφιπολευ*"` when the Odyssey comes; add the unsubscripted form |
| σῆμα "grave mound" (tomb) | σῆμα "sign", the signs on Bellerophon's tablet (6.176, 6.178; writing) | tomb: `except: [6.176, 6.178]` |
| ἱστός "mast" (mast) | ἱστός "loom" (6.456, 6.491; loom, weaving) | mast: `except` the loom lines |
| δίφρος "chariot" (chariot) | δίφρος "seat, chair" (6.354; stool) | chariot: `except: [6.354]` |
| ἦ "he spoke, she spoke" (so-he-spoke) | ἦ καί, the particle "truly" (6.441) | so-he-spoke: `except: [6.441]` |
| νύμφη "nymph" (nymphs) | νύμφη "bride, young wife" (νύμφα φίλη 3.130; 9.560, 18.492; νύμφαι Od. 11.38) | nymphs: `except` those lines |
| νηΐς "Naiad" (nymphs, 6.22) | νῆϊς "unknowing" (νήϊδα 7.198, Od. 8.179) | nymphs: `=νηῒς` |
