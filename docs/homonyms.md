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
| Λάμπος, the Trojan elder | λάμπω "shine" | lampus: `^Λάμπον`, and in its Book 15 note `^Λάμπος` and Λαμπετίδης (15.526); Λάμπον at Od. 23.246 (a horse of Dawn) will need an `except` |
| Αἴθρη, Helen's handmaid | αἴθρη "clear sky" (17.646) | aethra: `^Αἴθρη` |
| Κραναή, the island | κραναός "craggy" (3.201) | cranae: `^Κραναῇ`; craggy: the form κραναῆς only |
| Θόας | θοός "swift" | thoas: exact forms, and in its Book 13 note the phrases `"Θόαντά τε"` and `"υἷϊ Θόαντι"` and the vocative Θόαν; swift-ships: `"!^Θόας"` |
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
| Ἀγαπήνωρ, the Arcadian leader (2.609) | ἀγαπήνωρ "manly" (8.114, of Eurymedon; 15.392, 23.113) | agapenor: `^Ἀγαπήνωρ`; manly: `"!^Ἀγαπήνωρ"` |
| Ἴδη (Ἴδην, Ἴδῃ) | ἴδῃ, ἰδῇ "may see" (subjunctive of εἶδον; ἰδῇ 8.406) | ida: `^Ἴδην`, `^Ἴδῃ`; Ἰδαίων ὀρέων "the mountains of Ida" (8.170, 8.410) is the adjective, not the herald Idaeus |
| Θηβαῖος, father of Eniopeus (8.120) | Θηβαῖος "Theban" (Teiresias, Od. 10.492, 10.565, 11.90, 11.165, 12.267, 23.323) | thebaeus: the phrase `"ὑπερθύμου Θηβαίου"` |
| Αἰγαί, Poseidon's town (Αἰγάς 8.203) | αἶγας "goats" | aegae: `^Αἰγὰς` |
| Εὐρυσθεύς (Εὐρυσθῆος 8.363) | εὐρυσθενής "wide in strength" (8.201) | eurystheus: the exact form; add Εὐρυσθεύς (19.123) later, never a stem |
| σειρή "rope" (the golden rope, 8.19, 8.25) | Σειρῆνες, the Sirens (Odyssey 12) | the-golden-rope: `σειρὴν`; Melanthius' rope (Od. 22.175, 22.192) will need `except` |
| τάλαντα "scales" (8.69; 16.658, 19.223, 22.209) | τάλαντα "talents" of gold (9.122, 18.507, 19.247, 23.269) | the-scales-of-zeus: the phrase `ἐτίταινε τάλαντα`; later `Διὸς ἱρὰ τάλαντα` (16.658), `κλίνῃσι τάλαντα` (19.223) |
| Κρείων, father of Lycomedes (Κρείοντος 9.84) | κρείων "powerful" (κρείων Ἀγαμέμνων 9.62, 9.368) | creon: `^Κρείοντος` |
| Ἱρή, the Messenian town (Ἱρήν 9.150, 9.292) | ἱρή "sacred" (ἱρήν) | hire: `^Ἱρήν`; hieros: `"!^Ἱρήν"` |
| Ἐνόπη, the Messenian town (9.150, 9.292) | ἐνοπή "shout, cry" (3.2) | enope: `^Ἐνόπην` |
| Αἴπεια, the Messenian town (9.152, 9.294) | αἰπεῖαν "steep", of Scyros (9.668) | aepeia: `^Αἴπειαν`; steep (Book 9 note): `"=αἰπεῖαν"` |
| Φηραί, Messenian Pherae (Φηράς 9.151, 9.293) | φῆρας "beasts", the Centaurs (2.743) | pherae-in-messenia: `^Φηράς`; centaurs (Book 2 note): `"=φῆρας"` |
| Ἀμύντωρ, Phoenix's father (9.448) | ἀμύντωρ "defender" (Od. 2.326, 16.256, 16.261) | amyntor: `^Ἀμύντορος` |
| Κουρῆτες, the people (9.529, 9.532, 9.549, 9.551, 9.589) | κουρῆτες "young men" (19.193, 19.248) | curetes: `^Κουρη*` |
| Ἀλκυόνη, Cleopatra's byname (Ἀλκυόνην 9.562) | ἀλκυών, the halcyon (ἀλκυόνος 9.563) | cleopatra: `Ἀλκυόνην`; halcyon: ἀλκυόνος |
| Ἴδης, Idas (Ἴδεω 9.558) | Ἴδη, Ida (Ἴδης 8.75); ἰδέω (14.235) | idas: `^Ἴδεω`; ida: `"=Ἴδης"` |
| Διομήδη, Achilles' captive from Lesbos (9.665) | Διομήδης | diomede: `"=Διομήδη"`; diomedes claims exact forms |
| Ἶφις, Patroclus' captive (9.667) | ἶφι "by might" | iphis: the exact form |
| Δόλοπες (Δολόπεσσιν 9.484) | the names Δόλοψ (11.302, 15.525–555) and Δολοπίων (5.77) | dolopians: the exact form |
| Ζεὺς καταχθόνιος, Hades (9.457) | Ζεύς | zeus: `except: [9.457]`; hades: the phrase `"Ζεύς τε καταχθόνιος"`; zeus-of-the-underworld claims καταχθόνιος |
| Δόλων, the Trojan spy | δόλων "of tricks" (11.430; Od. 13.293) | dolon: `^Δόλων` |
| Ἅρμα, the Boeotian town (2.499) | ἅρμα "chariot" (ἅρμʼ 11.528) | harma: `^Ἅρμʼ` |
| Πλευρών, the Aetolian town | πλευρῶν "of the ribs" (11.437) | pleuron: `^Πλευρῶνʼ`, and `^Πλευρῶνι` in its Book 13 note (13.217; 14.116 later); Πλευρώνιον (23.635) is the adjective "of Pleuron" |
| Θρύον, the Pylian town (2.592) | θρύον "rush" (21.351) | thryum: `^Θρύον`; it also claims Θρυόεσσα (11.711), the same place (Strabo 8.3.24) |
| Ἶσος, son of Priam (Ἶσον 11.101) | ἶσος "equal" | isus: `^Ἶσον` |
| Ἱππόδαμος, the Trojan (11.335) | ἱππόδαμος "tamer of horses" | hippodamus: `^Ἱππόδαμον`; tamer-of-horses: `except: [11.335]` |
| Ὑπείροχος, the Trojan (11.335) | ὑπείροχος "outstanding" (6.208 = 11.784) | hypeirochus: `^Ὑπείροχον` |
| Ἔρις, Strife (Ἔρις 11.73, Ἔριδα 11.3) | ἔρις "strife" (ἔριδα 11.529) | strife: `^Ἔρις`, `^Ἔριδα` |
| Ἶρις, the goddess | ἶρις "rainbow" (ἴρισσιν 11.27) | iris: exact forms |
| Μέροψ, the seer of Percote (11.329) | μέροπες "mortal" (μερόπων 11.28) | merops: the exact form Μέροπος |
| Πυλάρτης, the Trojan (11.491) | πυλάρτης "gatekeeper", of Hades (8.367) | pylartes: the exact form Πυλάρτην |
| Φηραί, Pherae in Messenia (Φηράς 9.151, 9.293) | Φῆρας "beasts", the Centaurs (2.743), which differs only by accent | pherae-in-messenia (Book 9 note): `"=Φηράς"` |
| Τελαμών | τελαμών "strap" (11.38; τελαμῶνος 5.796) | telamon claims Τελαμώνιος and the patronymics, and `^Τελαμῶνος` in its Book 13 note (13.177; 17.284 and 17.293 later, and Od. 11.553); shield excludes `"!^Τελαμῶνος"`, so the strap's lowercase forms stay with shield |
| Ἱππόμαχος, son of Antimachus (12.189) | ἱππόμαχοι "fighting from horses" (10.431) | hippomachus: `^Ἱππόμαχον` |
| Μένων, the Trojan (12.193) | μένων "staying" | menon: `^Μένωνα` |
| Δάμασος, the Trojan (12.183) | δάμασον "tame!" (9.496) | damasus: `^Δάμασον` |
| Ἀδάμας, son of Asius (12.140) | ἀδάμαστος "untamable" (9.158) | adamas: `^Ἀδάμα*` |
| Ἐπικλῆς, Sarpedon's companion (12.379) | ἐπίκλησιν "by name" (7.138, 16.177, 18.487, 22.29, 22.506) | epicles: the exact form Ἐπικλῆα |
| Ἰαμενός, the Trojan (12.139, 12.193) | εἱαμενῇ "meadow" (4.483, 15.631) | iamenus: the exact form Ἰαμενόν |
| Ῥοδίος, the river (12.20) | Ῥόδιος "Rhodian", which differs only by accent | rhodius: `"=Ῥοδίος"` |
| Λύκων, a Trojan (16.335, 16.337) | λύκων "of wolves" (13.103) | wolves: λύκων in its Book 13 note; add `"!^Λύκων"` with Book 16 |
| Σκῶλος, the Boeotian town (2.497) | σκῶλος "stake" (13.564) | scolus: Σκῶλόν; like-a-fire-hardened-stake: the phrase `"σκῶλος πυρίκαυστος"` |
| Κίρκη (Od. 8.448; Books 10 and 12) | κίρκος "hawk" (22.139; Od. 13.87, 15.526) | hawk: ἴρηξ and `ἰρηκ*`; when κίρκος is added, use exact forms, never the stem κιρκ* |
| Κήτειοι (Od. 11.521) | κήτεα "sea-beasts" (13.27) | sea-beasts: the exact form κήτεʼ |
| Πορθεύς, grandfather of Tydeus (Πορθεῖ 14.115) | πορθέω "sack" | portheus: `^Πορθεῖ` (the digitized text printed it in lowercase; corrected) |
| Ἄγριος and Μέλας, sons of Portheus (14.117) | ἄγριος "wild", μέλας "black" | agrius: `^Ἄγριος`; melas: `^Μέλας` |
| Πρόμαχος, the Boeotian (14.476–483) | πρόμαχος "champion" | promachus: `^Πρόμαχον`, `^Πρόμαχος`, `^Προμάχοιο`, and the patronymic Ἀλεγηνορίδαο (14.503) |
| Ἦνοψ, the herdsman (Ἤνοπι 14.445) | ἤνοψ "gleaming" (ἤνοπι χαλκῷ 16.408, 18.349; Od. 10.360) | enops: `^Ἤνοπι` and Ἠνοπίδην |
| Ὑπερήνωρ, son of Panthous (Ὑπερήνορα 14.516) | ὑπερηνορέων "overbearing" | hyperenor: `^Ὑπερήνορα` |
| Ὕπνος, Sleep (14.231–286, 14.354) | ὕπνος "sleep" | sleep: `^Ὕπν*`; hypnos: `"!^Ὕπν*"`. Monro–Allen print the twins Sleep and Death in lowercase at 16.454, 16.672 and 16.682, which will need phrases |
| Θάνατος, Death (Θανάτοιο 14.231) | θάνατος "death" | death: `^Θάνατ*`; thanatos: `"!^Θανάτ*"` |
| Νύξ, Night (14.259, 14.261) | νύξ "night" | night: `^Νύξ`, `^Νυκτ*`, and `except: [7.282, 7.293]`, where "Night" at the head of an English sentence would link |
| Ῥέα, Rhea (15.187) | ῥέα "easily" | rhea: Ῥείας (14.203) and `^Ῥέα` (15.187) |
| Τιτῆνες, the Titans (14.279) | τιτήνας "stretching" (13.534) | titans: the exact form Τιτῆνες |
| χαλκίς, the bird the gods call chalcis (χαλκίδα 14.291) | Χαλκίς, the towns (Χαλκίδα 2.537, 2.640) | chalcis and chalcis-aetolia: `^Χαλκίδα`; chalcis-and-cymindis: `"χαλκίδα κικλήσκουσι"` |
| Θέμις, the goddess (Θέμιστι 15.87, Θέμι 15.93) | θέμις "what is right" (θέμιστα 5.761) | themis-the-goddess: `^Θέμιστι`, `^Θέμι`, later `^Θέμιστα` (20.4) and `^Θέμιστος` (Od. 2.68); titled "Themis (goddess)" with en: [Themis], since themis is the word's id; no stem (Θεμιστοκλῆς, Χρυσόθεμις) |
| Οὐρανός, Heaven (15.36) | οὐρανός "sky" | sky claims Οὐρανὸς in its Book 15 note (the sky also at 5.750, 8.16, 8.394); Hesiod's Uranus will need his own id |
| Βουκολίδης, son of Bucolus (15.338) | βουκόλος "herdsman"; Βουκολίων (6.22) | bucolus and sphelus claim only Βουκολίδαο |
| Αἴθων, Hector's horse (8.185); Odysseus' false name (Od. 19.183) | αἴθων "tawny" | tawny claims `"αἰετὸς αἴθων"` (15.690) only; the-horses-of-hector `^Αἴθων` |
| Ὠκύαλος, the Phaeacian (Od. 8.111) | ὠκύαλος "swift-sailing" (15.705) | swift-sailing-ships claims ὠκυάλου; Od. 12.182 and 15.473 will need the phrase `"ὠκύαλος νηῦς"` |

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
| Εὐρυμέδων | eurymedon, Agamemnon's charioteer (4.228; `except: [8.114, 11.620]`); eurymedon-attendant-of-nestor (8.114, 11.620; `except: [4.228]`); a king of the Giants (Od. 7.58) |
| Αἵμων (again) | Αἱμονίδαο (17.467) is the father of Laerces, a third Haemon |
| Ἀντηνορίδης | helicaon (3.123), laodocus (4.87: laodocus claims the exact dative Ἀντηνορίδῃ, which a later book may use of another son), and Antenor's other sons in later books (Agenor is named directly, 4.467) |
| Λαόδοκος | laodocus, son of Antenor (4.87); a companion of Antilochus with the same name (17.699) will need his own id |
| Χρομίος | chromius, Nestor's captain (4.295; `except: [5.160, 5.677, 8.275]`); chromius-son-of-priam (5.160); chromius-of-lycia (5.677); chromius-killed-by-teucer (8.275; all three others except it); later an ally (17.218, 17.494, 17.534) and Nestor's brother (Od. 11.286): `Χρομίον` will catch 17.218 |
| Ἀλάστωρ | alastor, Nestor's captain (4.295; `except: [5.677]`); alastor-of-lycia (5.677); alastor-who-carries-teucer (8.333 = 13.422; perhaps the Pylian, but the poem does not say); later the father of Tros (20.463) |
| Βίας | bias, Nestor's captain (Βίαντα, 4.296); bias-the-athenian (`^Βίας`, 13.691), since βίας "acts of violence" has the same letters (5.521, 16.213); the father of Laogonus and Dardanus (Βίαντος, 20.460) will need his own id |
| Πελάγων | pelagon, Nestor's captain (Πελάγοντα, 4.295); pelagon-of-lycia (Πελάγων, 5.695) |
| Ἐχέπωλος | echepolus, son of Thalysias (4.458); Echepolus son of Anchises gives Agamemnon a mare (23.296) |
| Διώρης | diores, the Epeian (2.622, 4.517; exact forms only); Διώρεος, Automedon's father (17.429, 17.474) |
| Ἄντιφος (again) | Book 11 brings Antiphus son of Priam back (11.101–109): antiphus and antiphus-of-maeonia `except: [11.104]`, and antiphus-son-of-priam claims Ἄντιφον |
| Ἀγήνωρ (again) | Echeclus, "son of Agenor" (20.474), may be a different Agenor |
| Πείρως, Πείρεως | peirous (2.844, 4.520, 4.525); Rhigmus "son of Peireos" (20.484–485) may be his son |
| Ἰδαῖος | idaeus, Priam's herald (Books 3, 7, 24; `except: [5.11, 5.20]`); idaeus-son-of-dares claims only its two phrases, "Φηγεὺς Ἰδαῖός" and "Ἰδαῖος δʼ ἀπόρουσε" (5.11, 5.20), so it needs no `except` for the herald's lines (7.276, 7.278, 7.372, 7.381, 7.413, 7.416, 24.325) |
| Ἀντηνορίδης | helicaon (3.123; `except: [11.221, 11.249]`); in Book 11 the sons are Polybus, Agenor and Acamas (Ἀντηνορίδας, 11.59), Iphidamas (11.221) and Coon (11.249); antenor claims the patronymic by the patronymic rule |
| Εὐρυβάτης | eurybates, Agamemnon's herald; eurybates-of-ithaca (2.184). The herald of the embassy (9.170) is taken as Agamemnon's, and eurybates claims `Εὐρυβάτ*`, which will need an `except` for Odysseus' herald at Od. 19.247 |
| Ἐπίστροφος | epistrophus (2.517), epistrophus-of-lyrnessus (2.692), epistrophus-of-the-halizones (2.856) |
| Ἀμφίμαχος | amphimachus (2.620), amphimachus-of-caria (2.870–871) |
| Ἄντιφος | antiphus (2.678), antiphus-of-maeonia (2.864), antiphus-son-of-priam (4.489; Book 11 again) |
| Ἀκάμας | acamas, son of Antenor (2.823), acamas-of-thrace (2.844; `^Ἀκάμαντʼ` at 6.8, with `except: [11.60]`); acamas claims the phrase `"ἠΐθεόν τʼ Ἀκάμαντʼ"` (11.60); acamas-of-thrace `except: [12.100]` (= 2.823); in Book 14 Ἀκάμας (14.476, 14.478) is Antenor's son again, and acamas-of-thrace `except: [14.476, 14.478]`; acamas' Book 14 note claims Ἀκάμαντος (14.488) |
| Ἄδρηστος | adrastus, king of Sicyon (2.572), and adrestus, son of Merops (2.830), both `except: [6.45]`; adrastus-the-trojan, taken alive by Menelaus and killed by Agamemnon (Ἄδρηστον, Ἄδρηστος, 6.37–65; `except: [2.572, 2.830]`). Another Trojan Adrastus is killed by Patroclus (16.694); adrastus' Book 14 note claims Ἀδρήστοιο (14.121), which the English alone had sent to adrastus-the-trojan; Ἀδρήστου (23.347), of Adrastus' horse, will need adding |
| Εὔρυτος | eurytus (2.596, 2.730), eurytus-of-elis (2.621) |
| Εὐρύπυλος | eurypylus-of-cos (2.677), eurypylus (2.736; Book 11 adds Εὐρυπύλῳ, Εὐρύπυλʼ); Εὐρυπύλοιο at 15.392 is the Thessalian: eurypylus claims it in its Book 15 note, and eurypylus-of-cos `except: [15.392]`; Book 12 adds Εὐρύπυλον (12.2), which at Od. 11.520 is the son of Telephus, and eurypylus will need an `except` there |
| Ἄκτωρ | actor-son-of-azeus (2.513; `except: [11.785]`, and 16.14 when Book 16 is indexed), actor-of-elis (2.621; Ἀκτορίωνε, also 11.750), actor-father-of-menoetius (the phrase `"Ἄκτορος υἱός"`, 11.785; it will need `"Ἄκτορος υἱόν"` at 16.14) |
| Κλυμένη | clymene, Helen's handmaid (3.144); a Nereid (18.47) and a heroine of the Odyssey (11.326) |
| Κλυτίος, Ἱκετάων, Πάνθοος | the Trojan elders of 3.146–148, who are also fathers of warriors in later books (Caletor, Melanippus, Euphorbus and Polydamas): the same men, so their entries gain notes, not new ids |
| Ξάνθος | xanthus-son-of-phaenops (5.152; `except: [5.479, 6.172]`); xanthus-of-lycia, the river (2.877, 5.479); later the Trojan river Xanthus, that is the Scamander (14.434, 21.2: `=Ξάνθου` on xanthus-of-lycia will catch them), and horses of Hector (8.185) and Achilles (16.149, 19.400) |
| Θόων | thoon-son-of-phaenops (5.152); Trojans of the same name (11.422, 12.140, 13.545) |
| Φαῖνοψ | phaenops, father of Xanthus and Thoon (5.152); the father of Phorcys (17.312) and Phaenops son of Asius (17.583) are others |
| Ἕλενος | helenus-son-of-oenops (Ἕλενον, 5.707; it will need `except: [24.249]`, where Ἕλενον is Priam's son); helenus, Priam's son, "by far the best of the bird-seers" (6.76 …; `except: [5.707]` if a pattern catches Ἕλενον) |
| Ὀρέστης | orestes-the-achaean (5.705; `except: [12.139, 12.193]`); orestes, Agamemnon's son (9.142, 9.284); orestes-the-trojan, with Asius, killed by Leonteus (Ὀρέστην, 12.139, 12.193; `except: [5.705]`) |
| Οἰνόμαος, Τεύθρας | oenomaus (5.706) and teuthras (5.705), killed by Hector; oenomaus `except: [12.140, 13.506]`; oenomaus-the-trojan, with Asius (12.140; `except: [5.706]`), probably the Oenomaus killed by Idomeneus (13.506), whom it also takes; Axylus is "son of Teuthras" (Τευθρανίδην, 6.13): teuthras-father-of-axylus |
| Ἄμφιος | amphius, son of Merops (Ἄμφιος, 2.830); amphius-son-of-selagus (Ἄμφιον, 5.612). Both came from (A)paesus |
| Ὀρσίλοχος | orsilochus-son-of-diocles (5.542, 5.549; `except: [8.274]`); orsilochus-killed-by-teucer (8.274); their grandfather is ortilochus (5.546–547); Idomeneus' son in Odysseus' false tale (Od. 13.260) |
| Μελάνιππος | melanippus, Teucer's victim (8.276; `except: [15.547, 15.553, 15.576, 15.582]`); melanippus-son-of-hicetaon claims the phrases `"ἴφθιμον Μελάνιππον"` (15.547) and `"ὑπέρθυμον Μελάνιππον"` (15.576), the vocative Μελάνιππε (15.553, 15.582) and Ἱκεταονίδην (15.546); a Trojan killed by Patroclus (16.695) and an Achaean (19.240) will need their own ids, and melanippus an `except` for each |
| Μηκιστεύς | mecisteus, son of Talaus (Μηκιστέος 2.566; 23.678); mecisteus-son-of-echius, who carries Teucer away (8.333) and Hypsenor (13.422) and dies at 15.339 (Μηκιστῆ, claimed in its Book 15 note) |
| Ἐχίος | echius, father of Mecisteus (Ἐχίοιο 8.333; `except: [15.339]`); echius-killed-by-polites, an Achaean (Ἐχίον 15.339; `except: [16.416]`); a Lycian killed by Patroclus (Ἐχίον 16.416) will need his own id. The poem does not say whether Polites' victim is Mecisteus' father |
| Ἀγέλαος | agelaus, son of Phradmon (8.257; `except: [11.302]`); agelaus-the-achaean, killed by Hector (Ἀγέλαον 11.302; `except: [8.257]`); the suitor of the Odyssey |
| Ὄρμενος | ormenus, Teucer's victim (8.274); ormenus-killed-by-polypoetes (Ὄρμενον, 12.187; `except: [8.274]`), with ormenus `except: [12.187]`; ormenus-father-of-amyntor claims only Ὀρμενίδαο (9.448), since Ctesius, Eumaeus' father, is also Ὀρμενίδης (Od. 15.414); ὀρμενον, the participle "rushing" (17.738, 21.14) |
| Ὀφελέστης | ophelestes, Teucer's victim (8.274); a Paeonian killed by Achilles (21.210) |
| Λάμπος, Αἴθων, Πόδαργος, Ξάνθος (horses) | the-horses-of-hector (8.185: `^Λάμπε`, `^Αἴθων`, Πόδαργε, `^Ξάνθε`); lampus is the Trojan elder (3.147, 15.526); Πόδαργος is also Menelaus' horse (23.295), Ποδάργη the Harpy (16.150); Ξάνθος also Achilles' horse (19.400, 19.420: `except` them on the-horses-of-hector); Αἴθων is Odysseus' false name (Od. 19.183); `^Λάμπε` keeps out λάμπε "shone" (12.463) |
| Ἰφιτίδης / Ἴφιτος | iphitus-father-of-archeptolemus (Ἰφιτίδην 8.128); iphitus, the Phocian father of Schedius (2.518) |
| Τελαμώνιος | ajax (Τελαμώνιος Αἴας) and Teucer (Τελαμώνιε 8.281): ajax `except: [8.281]`; telamon by the patronymic rule; Τελαμώνιον (11.563, 11.591) is Ajax, but at 15.462 it is Teucer, and ajax's Book 15 note `except: [15.462]`; Τελαμώνιος is Teucer again at 13.170 (ajax's Book 13 note excepts it), and so is υἱὸς Τελαμῶνος at 13.177, which telamon and telamonian claim |
| Ὑψήνωρ | hypsenor, son of Dolopion (Ὑψήνορα, 5.76; `except: [13.411]`); hypsenor-son-of-hippasus claims the phrase `"Ἱππασίδην Ὑψήνορα"` (13.411), as does hippasus-father-of-hypsenor |
| Περίφας | periphas, son of Ochesius (5.842, 5.847); the herald Periphas, son of Epytus (17.323) |
| Πολύιδος | polyidus-son-of-eurydamas (Πολύειδον, 5.148); polyidus-the-seer, of Corinth (Πολυΐδου, Πολύϊδος, 13.663, 13.666) |
| Ἀστύνοος | astynous (5.144; `except: [15.455]`); astynous-son-of-protiaon (Ἀστυνόῳ, 15.455), whose father protiaon claims Προτιάονος |
| Μύδων, Ἀτύμνιος | mydon, son of Atymnius (5.580–581); a Paeonian Mydon (21.209) and Atymnius son of Amisodarus (16.317) are others |
| Κοίρανος, Νοήμων, Ἅλιος | coeranus-of-lycia, noemon-of-lycia and halius (5.677–678); Meriones' charioteer Coeranus (17.611), a Pylian Noemon (23.612), and Phaeacian Halius (Od. 8.119, 8.370) |
| Βῶρος | borus, father of Phaestus (5.44); Borus son of Perieres (16.177) |
| Ὦτος | otus, son of Aloeus (Ὦτος, 5.385; `except: [15.518]`); otus-of-cyllene claims the phrase `"Ὦτον Κυλλήνιον"` (15.518), since Ὦτον alone is the son of Aloeus at Od. 11.308 |
| Τληπόλεμος | tlepolemus, son of Heracles (2.653, 5.628); Tlepolemus son of Damastor (16.416) |
| Σκαμάνδριος | scamandrius, the hunter (5.49; `except: [2.465]`); the adjective of the Scamandrian plain (2.465, 2.467, on scamander); Astyanax, whom Hector calls Scamandrius (Σκαμάνδριον, 6.402): scamander and scamandrius `except: [6.402]`, and astyanax claims `Σκαμάνδριον` with `except: [2.465, 5.49]` |
| Φαῖστος | phaestus-son-of-borus (`=Φαῖστον`, 5.43); the Cretan town Φαιστός (2.648; `except: [5.43]`), which differs only by accent |
| Γλαῦκος | glaucus, the Lycian (2.876, 6.119 …; `except: [6.155]`); glaucus-son-of-sisyphus, Bellerophon's father, claims only the phrases `"Γλαῦκον τέκεθʼ"` and `"Γλαῦκος τίκτεν"` (6.154–155), so that it catches no later Glaucus; Book 12 adds Γλαῦκον, Γλαῦκε, Γλαύκου to glaucus, with `"!Γλαῦκον τέκεθʼ"` to keep it off 6.154 |
| Ἱππόλοχος | hippolochus, Glaucus' father (6.119, 6.144, 6.197, 6.206; 7.13, 12.309, 12.387, 17.140); hippolochus-son-of-antimachus, killed by Agamemnon (11.122, 11.145; `except: [6.197, 6.206]`), and hippolochus `except: [11.122, 11.145]` |
| Δρύας | dryas, the Lapith (1.263; `except: [6.130]`); dryas-father-of-lycurgus (6.130) |
| Λυκόοργος | lycurgus, the son of Dryas who drove off the nurses of Dionysus (6.130; `except: [7.142, 7.144, 7.148]`); lycurgus-of-arcadia, who killed Areithous (7.142–149) |
| Λυκοῦργος (again) | lycurgus (6.130), lycurgus-of-arcadia (7.142–149), lycurgus-of-sparta (Rhetoric 1398b18); lycurgus-of-athens, the orator of *Against Leocrates*, has no Greek patterns and must not take the alias "Lycurgus" |
| Θόας (again) | thoas, the Aetolian son of Andraemon (`=Θόας`, 2.638, 7.168; in Book 13 the phrases `"Θόαντά τε"`, 13.92 (and 19.239 later), and `"υἷϊ Θόαντι"`, 13.216, and the vocative Θόαν); thoas-of-lemnos, Hypsipyle's father in later sources, claims the phrase `"θείοιο Θόαντος"` (14.230) with `en: [Thoas]`, and will need `"Θόαντι δὲ δῶρον"` (23.745); a Trojan Thoas (Θόαντα, 16.311) will need his own id |
| Ἰήσων, Ἰησονίδης | jason claims `Ἰησον*` (Ἰήσονι 7.469, Ἰησονίδης 7.468, 7.471) and will need Ἰήσων (Od. 12.72); euneus will need the phrase "υἱὸς Ἰήσονος" (21.41) |
| Αἴας (again) | ajax claims `^Αἶαν` (7.234, 7.288), which will catch the Locrian Ajax at 12.366, 23.483 and 23.493; Τελαμώνιε is Teucer at 8.281 (ajax `except`, teucer claims it) |
| Ἀρηΐθοος | areithous, the mace-man, father of Menesthius (7.8–10, 7.137–146), claims exact capitalized forms only, because of the adjective ἀρηϊθόων "swift in battle" (8.298, 15.315, 20.167); Rhigmus' charioteer Ἀρηΐθοον (20.487) will need his own id |
| Μενέσθιος | menesthius, son of Areithous (7.9); the Myrmidon leader Menesthius son of Spercheius (16.173) will need his own id |
| Ἠϊονεύς | eioneus, killed by Hector (7.11; `except: [10.435]`); eioneus-father-of-rhesus, the father of Rhesus, claims Ἠϊονῆος (10.435) |
| Αἴσηπος | aesepus, the river (2.825, 4.91); aesepus-son-of-bucolion (6.21) |
| Πήδασος | pedasus-son-of-bucolion (6.21); pedasus-on-the-satnioeis, the town of Elatus (6.35; 20.92, 21.87); pedasus-in-messenia (the phrase `"Πήδασον ἀμπελόεσσαν"`, 9.152, 9.294; both others except those lines); Achilles' trace horse (16.152, 16.467) will need its own id |
| Φύλακος | phylacus, father of Iphiclus (Φυλακίδαο, 2.705); phylacus-the-trojan (6.35) |
| Μελάνθιος | melanthius-the-trojan (6.36); the goatherd of the Odyssey (Μελάνθιον, Od. 21.175, 21.265, 22.474) will take the plain id |
| Ἔλατος | elatus (6.33); a suitor Elatus (Od. 22.267) |
| Νεστορίδης | antilochus (6.33) and nestor (`Νεστορίδ*`, the patronymic rule); in the Odyssey Νεστορίδης is Peisistratus (Od. 3.36, 3.482, 4.155, 15.48, 15.166, 15.202), and antilochus will need `except` there |
| Ἀτρεΐδης | agamemnon and menelaus both; agamemnon excepts the lines where the son of Atreus is Menelaus (6.44, 6.46), and atreidae claims the pair (Ἀτρεΐδας, 6.437) |
| Αἰολίδης, Αἴολος | aeolus-father-of-sisyphus (6.154); its English "Aeolus" will clash with the Odyssey's Aeolus son of Hippotas, keeper of the winds (Od. 10.1–76) |
| Ὀφέλτιος | opheltius (6.20; `except: [11.302]`); opheltius-the-achaean, killed by Hector (Ὀφέλτιον 11.302; `except: [6.20]`) |
| Λαοδίκη | laodice, Priam's daughter (3.124, 6.252); laodice-daughter-of-agamemnon (Λαοδίκη 9.145, 9.287; laodice excepts those lines) |
| Ἠετίων | eetion, Andromache's father (1.366, 6.395 …); Eetion of Imbros, who ransomed Lycaon (21.43); Eetion, the father of Podes (17.575, 17.590) |
| Πάνδαρος | pandarus claims `Πάνδαρ*`, which will catch Pandareus (Πανδάρεος, Od. 19.518, 20.66) once the Odyssey is added: add `"!Πανδαρε*"` |
| Ὀδίος | odius, leader of the Halizones (2.856; `except: [9.170]`); odius-the-herald (9.170; `except: [2.856]`) |
| Εὔηνος | euenus, son of Selepus (2.693); evenus-father-of-marpessa (Εὐηνίνης 9.557); the Aetolian river Evenus is named after him in later myth |
| Φόρβας | phorbas-father-of-diomede claims the phrase `"Φόρβαντος θυγάτηρ"` (9.665); phorbas-father-of-ilioneus, the Trojan, claims `"Φόρβαντος πολυμήλου"` (14.490) |
| Λυκομήδης | lycomedes, son of Creon (9.84; 12.366, 17.345, 19.240); Lycomedes king of Scyros belongs to later myth |
| Κρείων | creon, father of Lycomedes (9.84); Creon of Thebes, father of Megara (Od. 11.269), will need his own id and creon an `except` |
| Ἀφαρεύς, Καλήτωρ | aphareus, son of Caletor (9.83; 13.541); caletor-father-of-aphareus and aphareus both claim Καλητορίδην (13.541) by the patronymic rule; the Trojan Caletor, son of Clytius, is caletor (`^Καλήτορα`, 15.419; caletor-father-of-aphareus `except: [15.419]`), and the capital keeps out καλήτορα "caller" (24.577), a common noun; in later myth Aphareus is the father of Idas |
| Φοῖνιξ | phoenix, Achilles' tutor (`^Φοῖνιξ`, `^Φοίνικι`); phoenix-father-of-europa (`^Φοίνικος`, 14.321, with `en: [Phoenix]`), and europa claims the phrase `"Φοίνικος κούρης"`; Φοίνικες, the Phoenicians (23.744); Φοῖνιξ "a Phoenician" (Od. 14.288) will need an `except`. When phoenix takes Φοίνικα (23.360), English mentions of the tutor in lines without a Greek form will need an `except` on phoenix-father-of-europa |
| Αἰακίδης | achilles and grandson-of-aeacus claim Αἰακίδαο and Αἰακίδην, always Achilles; Αἰακίδης is Peleus at 16.15, 18.433 and 21.189 |
| Μενοιτίου υἱός | patroclus and son-of-menoetius claim `"Μενοιτίου υἱὲ"` (9.202) and `"Μενοιτίου ἄλκιμος υἱός"` (11.605, 11.814, 11.837); the accusative "Μενοιτίου ἄλκιμον υἱόν" (16.278, 16.827, 18.455, 19.24) will need adding |
| Ῥῆσος | rhesus, the Thracian king (10.435, 10.474, 10.519; `except: [12.20]`); rhesus-river, the river of Ida (12.20; `except: [10.435, 10.474]`, so that its English "Rhesus" stays off the king's lines) |
| Ἶλος | ilus, son of Tros (Ἴλου 10.415, 11.166, 11.372, 24.349; Ἶλος 20.232, 20.236), with exact forms, since a stem Ἰλ- would catch Ἴλιος; Ilus son of Mermerus (Od. 1.259) will need his own id, and ilus an `except` there; the-tomb-of-ilus claims the phrase "σήματι Ἴλου" (10.415) |
| Ἀμφιδάμας | amphidamas, of Cythera (Ἀμφιδάμαντι, Ἀμφιδάμας, 10.268–269); the father of the boy Patroclus killed (Ἀμφιδάμαντος, 23.87) will need his own id, and amphidamas `except: [23.87]` for the English name; Hesiod's Amphidamas of Chalcis (Works and Days 654) is a third |
| Ἀμύντωρ | amyntor is one entry for Phoenix's father (9.448) and the Amyntor of Eleon whose house Autolycus robbed (10.266), though the poem does not say that they are one man |
| Μόλος | molus, Meriones' father (10.269, 13.249); not Μολίων (11.322) or the Μολίονε (11.709, 11.750) |
| Αἴας (Book 10) | ajax `except: [10.110, 10.175]`, where Αἴαντα ταχύν is the son of Oileus; ajax-son-of-oileus claims the phrase `"Αἴαντα ταχὺν"` and takes the dual Αἴαντε (10.228) by `refs` |
| Νέστορος (ἀγλαὸς) υἱός | thrasymedes takes 10.196 and 10.229 by `refs`, not by a pattern: the same words are Antilochus (5.565, 13.400, 17.653, 18.16, 23.302, 23.541, 23.596, 23.755) and, in the Odyssey, Peisistratus (Od. 4.21, 4.303, 15.144) |
| Νηλήϊος | nestor claims only the phrase `"Νέστορʼ ἔπι πρῶτον Νηλήϊον"` (10.18); neleus claims the bare form, which is "Neleian Pylos" at 11.682 and Od. 4.639, Nestor at 23.349 and Antilochus at 23.514 |
| Ἀτρεΐδης (Book 10) | agamemnon `except: [10.230]`, where the son of Atreus is Menelaus |
| Φυλέος υἱός | meges claims the phrases `"Φυλέος ἄλκιμον υἱόν"` and `"Φυλέος υἱόν"` (10.110, 10.175); phyleus claims Φυλέος |
| Ὀϊλεύς (Book 11) | oileus, father of the Locrian Ajax, claims only Ὀϊλῆος and Ὀϊλῆϊ, and the nominative Ὀϊλεύς in its Book 13 note (13.697); oileus-the-trojan, Bianor's companion, claims Ὀϊλῆα (11.93) |
| Πείσανδρος | peisander-son-of-antimachus (Πείσανδρον, 11.122, 11.143); peisander-killed-by-menelaus (Πείσανδρος, Πεισάνδρῳ, 13.601–611); the Myrmidon (Πείσανδρος, 16.193) and the suitor (Od. 18.299, 22.243, 22.268) will need their own ids, and the two entries `except` their lines |
| Ἀντίμαχος | antimachus, who took Paris' gold (Ἀντιμάχοιο, 11.123, 11.132, 11.138); the Antimachus whose son Hippomachus dies at 12.188 may be he, but the poem does not say; sons-of-antimachus claims the phrases for the pair |
| Αὐτόνοος | autonous, the Achaean killed by Hector (Αὐτόνοον, 11.301); the Trojan Autonous killed by Patroclus (16.694) will need his own id and autonous an `except` |
| Δόλοψ, Κλυτίδης | dolops claims the phrase `"Δόλοπα Κλυτίδην"` (11.302), so that clytius, the Trojan elder, does not take his father; dolops-son-of-lampus claims Δόλοψ, Δόλοπος and Λαμπετίδης (15.525–555), and dolops `except: [15.525, 15.555]`; the Dolopians (Δολόπεσσιν, 9.484) are another entry; Κλυτίδη at Od. 15.540 is Peiraeus, son of another Clytius |
| Θυμβραῖος | thymbraeus (Θυμβραῖον, 11.320); thymbre claims only Θύμβρης (10.430) |
| Μολίων, Μολίονε | molion, Thymbraeus' attendant (Μολίονα, 11.322); the-moliones (Μολίονε, 11.709, 11.750), the twins Cteatus and Eurytus, who will also take Ἀκτορίωνε at 23.638; molus (10.269) is another name |
| Ὑπείροχος, Ὑπειροχίδης | hypeirochus, the Trojan killed by Odysseus (`^Ὑπείροχον`, 11.335; `except: [11.673]`, to keep the name off Itymoneus' line); itymoneus claims Ὑπειροχίδην (11.673), his father being an Elean; ὑπείροχον "outstanding" (6.208, 11.784) is the adjective |
| Θόων (Book 11) | thoon, killed by Odysseus (Θόωνα, 11.422; `except: [5.152]`); thoon-son-of-phaenops `except: [11.422]`; the Thoon of 12.140 is thoon-companion-of-asius (`except: [5.152, 11.422]`; thoon and thoon-son-of-phaenops `except: [12.140]`), and the Thoon killed by Antilochus (13.545), perhaps the same man, whom it also takes (thoon and thoon-son-of-phaenops `except: [13.545]`) |
| Ἔννομος | ennomus, the Mysian augur (2.858; Ἔννομον again at 17.218); ennomus-the-trojan, killed by Odysseus (Ἔννομον, 11.422), will need `except: [17.218]` |
| Πύρασος | pyrasus, the Thessalian town (2.695; `except: [11.491]`); pyrasus-the-trojan, wounded by Ajax (11.491; `except: [2.695]`) |
| Πυλάρτης | pylartes, wounded by Ajax (Πυλάρτην, 11.491); the Pylartes killed by Patroclus (16.696) may be another man, and pylartes will need an `except` or a note; πυλάρταο "gatekeeper" (8.367) is Hades' epithet |
| Ἀπισάων | apisaon, son of Phausius (Ἀπισάονα, Φαυσιάδην, 11.578–582); Apisaon son of Hippasus (17.348) will need his own id |
| Ἵππασος | hippasus-father-of-socus (Ἱππασίδην, Ἱππασίδῃσι, Ἱππάσου, 11.426–450; `except: [13.411]`); hippasus-father-of-hypsenor claims the phrase `"Ἱππασίδην Ὑψήνορα"` (13.411); Apisaon's father (17.348) will need his own id |
| Μούλιος | mulius, Augeas' son-in-law, claims only `"Μούλιον αἰχμητήν"` (11.739; `except: [16.696, 20.472]`); the Trojans killed by Patroclus (16.696) and Achilles (20.472), and the herald of Dulichium (Od. 18.423), are other men |
| Κόων | coon, eldest son of Antenor (Κόων, Κόωνι, 11.248–256); Κόων δʼ at 14.255 and 15.28 is Κόωνδε, "to Cos", written apart: cos claims the phrase `"Κόων δʼ εὖ"`, and coon `except: [14.255, 15.28]` |
| Πόλυβος | polybus, son of Antenor (Πόλυβον, 11.59); the Polybus of Egyptian Thebes (Od. 4.126), the father of Eurymachus and the suitor of Od. 22.284 will need their own ids |
| Ἀντηνορίδης, Δαρδανίδης (Book 11) | ilus claims `"παλαιοῦ Δαρδανίδαο"` and `"Ἴλου Δαρδανίδαο"` (11.166, 11.372); priam `except: [11.166, 11.372]`; dardanus claims Δαρδανίδαο; dardanus also claims Δαρδανίδῃ (13.376), as does priam's Book 13 note; the same letters are the vocative to Priam at 24.171 and 24.354 |
| Θεστορίδης (Book 12) | thestor, Calchas' father (Θεστορίδης, 1.69; `except: [12.394]`); alcmaon claims the phrase `"Θεστορίδην Ἀλκμάονα"` (12.394), his father another Thestor; Thestor son of Enops (16.401) is a third man |
| Ἀλκμάων | alcmaon, killed by Sarpedon (12.394); Ἀλκμαίων, son of Amphiaraus (Od. 15.248), is another name |
| Δευκαλίων, Δευκαλίδης | deucalion, Idomeneus' father (`"Δευκαλ*"`, `except: [20.478]`), and idomeneus (`"Δευκαλίδ*"`) share the patronymic (12.117; 13.307, 17.608); the Trojan Deucalion killed by Achilles (20.478) will need his own id |
| Ἀσιάδης | adamas and asius both claim Ἀσιάδην (12.140; 13.561, 13.759) by the patronymic rule, and Ἀσιάδης (13.771) in their Book 13 notes; Ἀσιάδῃ at 17.583 is Phaenops of Abydus, and asius will need an `except` or a note there |
| Ἀντιφάτης | antiphates, killed by Leonteus (12.191); the Laestrygonian king (Od. 10.106–132) and Antiphates son of Melampus (Od. 15.242–243) will need their own ids |
| Αἴας (Book 12) | ajax `except: [12.366]`, where Αἶαν is the son of Oileus; ajax-son-of-oileus claims `"Ὀϊλιάδη*"` (12.365; 13.203, 13.712, 14.446, 16.330, 23.759) and the phrase `"Αἶαν σφῶϊ"`; the-two-ajaxes has no Greek forms and takes the pair by refs |
| Ὑρτακίδης, Ὕρτακος | asius and hyrtacus claim Ὑρτακίδης; hyrtacus' Book 13 note adds Ὑρτάκου (13.759, 13.771) |
| Αἴας (Book 13) | ajax `except: [13.66, 13.695, 13.701]`, and in its Book 13 note `except: [13.170]`; ajax-son-of-oileus claims `"Ὀϊλῆος ταχὺς Αἴας"` (13.66) and, in its Book 13 note, `"Αἴαντος ἀδελφεός"` (13.695) and the clause `"Αἴας δʼ οὐκέτι πάμπαν Ὀϊλῆος ταχὺς υἱὸς"` (13.701); "the ships of Ajax" (13.681) does not say which Ajax and stays with ajax; 14.520 and 15.334 will need the same treatment |
| Ἀτρεΐδης (Book 13) | agamemnon's Book 13 note `except: [13.581, 13.593, 13.605, 13.610, 13.646]`, where the son of Atreus is Menelaus |
| Ἀμφίων | amphion-the-epeian (Ἀμφίων, 13.692); Amphion of Thebes (Ἀμφίονα, Od. 11.262) and Amphion son of Iasus (Ἀμφίονος, Od. 11.283) will need their own ids; Ἄμφιον (5.612) is Amphius, son of Selagus |
| Μέδων | medon, Oileus' bastard son (Μέδων, 2.727, 13.693; Μέδοντα 15.332 in its Book 15 note, which sets `except: [17.216]`); the Trojan ally Μέδοντα (17.216) and the herald of Ithaca (Od. 4.677 and later) will need their own ids, and medon an `except` in the Odyssey |
| Στιχίος | stichius (Στιχίος, 13.195, 13.691; Στιχίον 15.329, where Hector kills him, in its Book 15 note) |
| Ἴμβριος | imbrius claims only Ἴμβριον (13.171, 13.197); Ἴμβριος (21.43) is the adjective "of Imbros", of Lycaon's guest-friend Eetion |
| Μέντωρ | mentor-father-of-imbrius claims only Μέντορος (13.171), a form the Odyssey never uses of Mentor of Ithaca, who will need his own id |
| Ἀσκάνιος | ascanius, the Phrygian (Ἀσκάνιος, 2.862; `except: [13.792]`); ascanius-the-mysian (Ἀσκάνιον, 13.792), whom Strabo makes a Mysian from the Ascania by Nicaea (12.4.5) |
| Ἱπποδάμεια | hippodameia, wife of Peirithous (Ἱπποδάμεια, 2.742); hippodameia-daughter-of-anchises (Ἱπποδάμειαν, 13.429); Penelope's handmaid (Ἱπποδάμειαν, Od. 18.182) will need her own id and an `except` |
| Πολίτης | polites, Priam's son (Πολίτῃ 2.791; Πολίτης 13.533; 24.250); Odysseus' companion Polites (Od. 10.224) will need his own id and an `except` |
| Πανθοΐδης | panthous claims `Πανθοΐδ*` by the patronymic rule; polydamas claims only the phrase `"Πανθοΐδην ἀγαπήνορα"` (13.756), since the patronymic also names Euphorbus (16.808, 17.70, 17.81); at 14.454 Πανθοΐδαο is Polydamas speaking of himself, and polydamas' Book 14 note takes the line by refs |
| Ἦνοψ | enops, the herdsman of the Satnioeis, father of Satnius (Ἠνοπίδην 14.444, `^Ἤνοπι` 14.445); the fathers of Thestor (Ἤνοπος 16.401) and of Clytomedes (Ἤνοπος 23.634) are other men and will need ids or an `except` |
| Περιφήτης | periphetes, the Trojan (`"καὶ Περιφήτην"`, 14.515; `except: [15.638]` for its English name); periphetes-of-mycenae, son of Copreus, claims `"Μυκηναῖον Περιφήτην"` (15.638) |
| Μέρμερος | mermerus, the Trojan (`^Μέρμερον`, 14.513); Μερμερίδαο (Od. 1.259), the father of Ilus of Ephyra, is another man and would take the English "Mermerus" |
| Ὑπερήνωρ | hyperenor (`^Ὑπερήνορα`, 14.516); Ὑπερήνορος (17.24) will need adding |
| Ἱπποτίων | hippotion, father of Morys (Ἱπποτίωνος, 13.792); its Book 14 note claims Ἱπποτίωνα (14.514), where Meriones kills Morys and a Hippotion together; the poem does not say that they are father and son |
| Αἴας (Book 14) | ajax `except: [14.442, 14.520]`; ajax-son-of-oileus claims `"Αἴας εἷλεν Ὀϊλῆος ταχὺς υἱός"` (14.520) and, by `Ὀϊλιάδη*`, 14.446. Its phrase `"Ὀϊλῆος ταχὺς Αἴας"` will also catch 17.256, 23.473, 23.488 and 23.754, which ajax must except; 15.334 repeats 13.695 |
| Ἀτρεΐδης (Book 14) | agamemnon `except: [14.516]`, where the son of Atreus who kills Hyperenor is Menelaus (17.24–28); menelaus takes the lines by `refs: [14.516-519]` |
| Ἀρηΐλυκος | areilycus, father of Prothoenor (Ἀρηϊλύκοιο, 14.451); the Trojan Areilycus whom Patroclus kills (Ἀρηϊλύκου, 16.308) will need his own id, and areilycus `except: [16.308]` for its English name |
| Δανάη | danae (Δανάης and Ἀκρισιώνης, 14.319; acrisius shares Ἀκρισιώνης); danaans' stem `Δανα*` excludes `"!Δανάη*"` |
| Περσεύς | perseus, son of Danae (Περσῆα, 14.320), and by the patronymic rule Περσηϊάδαο (19.116, 19.123); Nestor's son Περσεύς (Od. 3.414, 3.444) will need his own id. Never use the stem Περσ- |
| Εὐρώπη | europa claims only the phrase `"Φοίνικος κούρης"` (14.321), with `refs: [14.322]`; the continent (Rhetoric 1415a18; Herodotus 4.45) and Hesiod's Oceanid (*Theogony* 357) rule out a stem Εὐρωπ- |
| Ῥαδάμανθυς | rhadamanthus: Ῥαδάμανθυν (14.322) in its Book 14 note, and the Rhetoric's form in its Rhetoric note; the Odyssey's forms (Od. 4.564, 7.323) will need a pattern |
| Ἰξίων | ixion takes the adjective Ἰξιονίης (14.317); the Poetics' Ἰξίονες, the plays, are taken by refs |
| Πασιθέη | pasithea, the Grace (Πασιθέην, 14.269, 14.276); Hesiod's Nereid of the same name (*Theogony* 246) will need her own id if Hesiod is indexed |
| Κλεῖτος | cleitus, son of Peisenor, Polydamas' charioteer (`"Κλεῖτον Πεισήνορος"`, 15.445); Cleitus son of Mantius (Od. 15.249–250) will need his own id |
| Πεισήνωρ | peisenor, father of Cleitus (Πεισήνορος, 15.445); the herald of Ithaca (Od. 2.38) and the father of Ops (Πεισηνορίδαο, Od. 1.429, 2.347, 20.148) will need their own ids |
| Λαοδάμας | laodamas, son of Antenor (`"ἕλε Λαοδάμαντα"`, 15.516); Alcinous' son (Od. 7.170, 8.117, 8.370) will need his own id |
| Κλυτίος (again) | clytius, the Trojan elder, claims Κλυτίοιο (15.419, 15.427) in its Book 15 note; Peiraeus' father (Κλυτίοιο Od. 16.327; Κλυτίδη Od. 15.540) will need his own id |
| Λαομεδοντιάδης | Priam (3.250) and Lampus (15.527): lampus' Book 15 note takes 15.527 by `refs` |
| Ἴασος | iasus, an Athenian leader (Ἴασος 15.337; Ἴασον 15.332 in its Iliad-scoped note, because Ἴασον Ἄργος at Od. 18.246 is an adjective); Amphion's father (Ἰασίδαο, Od. 11.283) and Dmetor's (Ἰασίδῃ, Od. 17.443) will need English excepts |
| Μάστωρ, Μαστορίδης | mastor, father of Lycophron (Μάστορος 15.430; Μαστορίδης 15.438 in the Iliad-scoped notes of mastor and lycophron); Halitherses son of Mastor (Od. 2.158, 24.452) will need English excepts |
| Σχεδίος | schedius, son of Iphitus (Σχεδίος 2.517; `except: [15.515]`); schedius-son-of-perimedes claims `"Σχεδίον Περιμήδεος"` (15.515); Σχεδίον υἱὸν Ἰφίτου (17.306) is the son of Iphitus, and schedius will need Σχεδίον there |
| Περιμήδης | perimedes, father of Schedius (15.515); Odysseus' companion (Od. 11.23, 12.195) will need an English `except` |

## Places that share a name

| Name | Entries (lines) |
|---|---|
| Ἄργος | argos (2.108 …); pelasgian-argos (2.681) |
| Θήβη | thebe, Eetion's city in the Troad (1.366, 2.691; `except: [4.378, 4.406]`); thebes, Boeotian Thebes (4.378, 4.406; `except: [2.691]`); hypothebae (2.505). The forms are mixed in later books: Θήβας is Boeotian at 5.804, 10.286 and 23.679 but Egyptian at 9.381; Θήβῃσι(ν) is Boeotian at 6.223 and 14.114 but Cilician at 22.479; Θήβῃ is Boeotian at 14.323 and 19.99 but Cilician at 6.397; Θήβην is Cilician at 6.416. In Book 14 thebes' note claims Θήβῃσι (14.114) and Θήβῃ (14.323) with `"!Θήβῃ Ὑποπλακίῃ"`; Θήβῃσιν, claimed in thebes' Book 6 note, will need `except: [22.479]` |
| Μίλητος | miletus-crete (2.647), miletus (2.868) |
| Αἰγιαλός | aegialus (2.575), aegialus-of-paphlagonia (2.855) |
| Σελλήεις | selleis-ephyra (2.659), selleis-arisbe (2.839); selleis-ephyra `except: [12.97]` (= 2.839); at 15.531 the river is Ephyra's again (Meges' corselet; Strabo 8.3.5), and selleis-arisbe `except: [15.531]` |
| Χαλκίς | chalcis, in Euboea (2.537; `except: [2.640]`), and chalcis-aetolia (2.640; `except: [2.537]`), both `^Χαλκίδα`, which leaves the bird χαλκίς (χαλκίδα 14.291) to chalcis-and-cymindis; Χαλκίδα at Od. 15.295 is a third place, by the coast of Elis, and will need its own id and an `except` on both towns |
| Ὀρχομενός | orchomenus (2.511; 9.381, the Minyan city of wealth), orchomenus-arcadia (2.605; `except: [2.511, 9.381]`) |
| Πτελεός | pteleus (2.594), pteleus-thessaly (2.697) |
| Ἕλος | helos (2.584), helos-pylos (2.594) |
| Αὐγειαί, Αὐγείας | augeiae (2.532), augeiae-laconia (2.583), both `except: [11.701]`; Αὐγείας, the king (11.701, 11.739), differs only by accent: augeas claims `"=Αὐγείας"` |
| Ξάνθος | xanthus-of-lycia (2.877, 5.479; the phrase `"Ξάνθόν τε ῥέοντα"` at 6.172, since 5.152 also reads Ξάνθόν τε; `except: [6.4]`); the Trojan river under its gods' name Xanthus is scamander (`^Ξάνθοιο` 6.4; also 8.560, 14.434, 21.2, 21.337, 21.383; `except: [6.172]`), but Ξάνθοιο at 12.313 is the Lycian river; xanthus-of-lycia also claims `"Ξάνθοιο παρʼ ὄχθας"` (12.313; `except: [21.337]`, where the same phrase is the Trojan river), and scamander `except: [12.313]`. At 14.434 (= 21.2) scamander claims `"Ξάνθου δινήεντος"` and xanthus-of-lycia excludes it (`"!Ξάνθου δινήεντος"`) |
| Πήδασος (the town) | pedasus-on-the-satnioeis (6.35) and pedasus-son-of-bucolion (6.21) share Πήδασον: each excepts the other's line; pedasus-in-messenia claims "vine-rich Pedasus" (`"Πήδασον ἀμπελόεσσαν"`, 9.152, 9.294), and both except those lines |
| Θήβη Ὑποπλακίη | thebe claims the phrase `"Θήβῃ Ὑποπλακίῃ"` (6.397), because Θήβῃ alone is Boeotian at 14.323 and 19.99 |
| Κελάδων, Φειά | celadon claims `^Κελάδοντι` (7.133), because κελάδοντα is "roaring" (18.576); pheia claims Φειᾶς (7.135) and will need Φεάς (Od. 15.297) |
| Ἰάρδανος | iardanus, the river by Pheia in Elis (7.135); the Cretan Iardanus (Od. 3.292, the same half-verse) will need its own id |
| ἐρινεός, the fig tree | the-fig-tree claims `"παρʼ ἐρινεόν"` (6.433; 11.167); 22.145 (καὶ ἐρινεὸν ἠνεμόεντα) will need adding, while the fig trees of 21.37 and Od. 12.103, 12.432 are others |
| πύργος, the tower of Ilios | the-tower-of-ilios claims πύργῳ, πύργον (3.153–154, 3.384, 6.373, 6.386, 6.431); later books need `except` for a shield "like a tower" (7.219, 11.485, 17.128) and the Achaean wall (12.332–333, 12.373) |
| Φηρή, Φηραί / Φεραί | pherae-in-messenia, Diocles' town (Φηρῇ 5.543; also 9.151, 9.293, Od. 3.488, 15.186); pherae, in Thessaly (Φεράς 2.711, Od. 4.798) |
| Πύλος | pylos (5.397, "in Pylos among the dead", as Monro–Allen print it; some read ἐν πύλῳ, "at the gate") |
| Κηφισίς λίμνη / Κηφισός | cephisian-lake (5.709); cephisus, the river (2.522–523) |
| Παισός / Ἀπαισός | apaesus (Ἀπαισοῦ 2.828, `^Παισῷ` 5.612): the same town |
| Δαρδάνιαι πύλαι / Σκαιαὶ πύλαι | dardanian-gates (5.789, 22.194, 22.413); scaean-gates. They may be one gate under two names |
| φηγός, the oak of Zeus | the-oak-of-zeus (5.693, φηγόν 6.237); 9.354 is claimed; 11.170 will need adding, and a simile oak at 16.767 must be excepted |
| Ἐφύρη | ephyra, Astyocheia's Ephyra on the Selleis (Ἐφύρης 2.659); ephyra-in-argos, "in a corner of Argos", later Corinth (Ἐφύρη 6.152, Ἐφύρῃ 6.210) |
| Φρυγίη, Μῃονίη | phrygia and maeonia are places; phrygians and maeonians are peoples (the people's stem must not catch the land: maeonians `[Μῄο*, "!Μῃονίη*"]`, which still lets in Μῃονίς "a Maeonian woman", 4.142) |
| Θῆβαι in Egypt | thebes-in-egypt (`"ὅσα Θήβας"` 9.381, Αἰγυπτίας 9.382; Od. 4.126–127); thebes (Boeotian) `except: [2.691, 9.381]`; egypt shares Αἰγυπτίας |
| Αἰγύπτιος | egypt and thebes-in-egypt (9.382); Αἰγύπτιος, the Ithacan elder (Od. 2.15), will need his own id |
| Θρῄκη / Θρῇκες | thrace, the land (Θρῄκηθεν 9.5, 9.72; Θρῄκης 13.301 by its Book 13 note); thracians, the people (`Θρήϊκ*`), which also takes Θρηϊκίης, "Thracian", of Samos (13.13) |
| Κύθηρα, Κυθέρεια | cythera claims `Κυθηρ*` (10.268; 15.431, 15.432, 15.438; Od. 9.81); Aphrodite's title Κυθέρεια (Od. 8.288, 18.193) is spelled with ε and is not caught |
| Ἐλεών | eleon claims Ἐλεῶνʼ (2.500) and Ἐλεῶνος (10.266); Strabo reports an ancient reading ἐξ Ἑλεῶνος, "from Heleon", at 10.266 (9.5.18) |
| Σάμος | samos, Odysseus' island (Σάμον, 2.634); samothrace claims the phrase `"Σάμου ὑληέσσης"` (13.12); Σάμου (24.78) and Σάμον (24.753), named with Imbros, are Samothrace: samothrace will need those phrases, and samos `except: [24.753]` |
| Ἴμβρος | imbros claims Ἴμβρου (13.33; 14.281 and 24.78 later) and will need Ἴμβρον (24.753); Ἴμβριον (13.171, 13.197) is the man Imbrius, and Ἴμβριος (21.43) the adjective |
| Πήδαιον | pedaeum, Imbrius' town (Πήδαιον, 13.172; `except: [5.69]`); pedaeus, Antenor's bastard son (Πήδαιον, 5.69; `except: [13.172]`) |
| Κῶς | cos claims Κῶν and the phrase `"Κόων δʼ εὖ"` (14.255; 15.28), where the text writes Κόωνδε apart; coon `except: [14.255, 15.28]` |
| Κυλλήνη, Κυλλήνιος | cyllene, the Arcadian mountain (Κυλλήνης 2.603; `except: [15.518]`); cyllene-elis, the port of Elis (Κυλλήνιον 15.518; Strabo 8.3.4); Hermes Κυλλήνιος (Od. 24.1) belongs to the mountain |

## Epithets that also describe other things

A formulaic epithet can describe something else in a later book, where its pattern must not follow it:

| Epithet | Its other use | What to do |
|---|---|---|
| κελαινεφής, of Zeus (lord-of-dark-clouds) | of blood: 4.140, 5.798, 16.667, 21.167, Od. 11.36 (dark-blood) | `except` those lines on lord-of-dark-clouds (the word order αἷμα κελαινεφές defeats an exclusion); lord-of-dark-clouds now excepts 4.140, 5.798 and 14.437, and dark-blood claims `αἷμα κελαινεφὲς` and `κελαινεφὲς αἷμʼ` (5.798, 14.437); 16.667 (κελαινεφὲς αἷμα) will need adding |
| πτερόεις, of words (winged-words) | of arrows: 4.117, 5.171, 16.773, 20.68, and of light shields, λαισήϊα πτερόεντα (5.453, 12.426) (feathered) | keep both entries to phrase patterns |
| δῖος "brilliant" (brilliant, `=δῖος` and notes) | the shining sea, εἰς ἅλα δῖαν (shining-sea) | brilliant's Book 14 note `except: [14.76]`, as at 1.141 and 2.152 |
| αἱματόεις "bloody" (bloody) | blood itself, clotted on a corpse or a wound (7.425, 14.7) | bloody `except: [7.425, 14.7]` |
| μέλας "black" of ships (black-ships) | κῆρα μέλαιναν "black doom" (7.254, 9.65, 14.462) | black-ships `except: [7.254, 9.65, 14.462]` |
| "snowy": ἀγάννιφος of Olympus (snowy-olympus) | νιφόεις of mountains (niphoeis, `"νιφόεντ*"`, 13.754, 14.227) | two entries; niphoeis has a transliterated id because the plain title is taken; like-a-snowy-mountain shares 13.754 |
| "of the lovely tresses": ἐϋπλόκαμος (with-lovely-tresses, Hecamede) | καλλιπλόκαμος (of-the-lovely-tresses, `"καλλιπλοκάμ*"`, 14.326; 18.407, 18.592, 20.207) | each entry links the English only where its own Greek form stands |
| πυκινός "close": πυκινῶς ἀραρυίας, πυκινὰς δὲ θύρας (closely-fitted) | πυκινὸν ἔπος, πυκινὰς φρένας (shrewd-word); φρεσὶ πευκαλίμῃσι (shrewd-mind) | the senses are split by phrase; shrewd-word and shrewd-mind are both "shrewd mind" in English |
| μαρμάρεος "gleaming" (marmareos, μαρμαρέην 14.273; 17.594, 18.480) | μαρμαίρων "flashing" (marmairon) | two words, two entries |
| αἰνότατε Κρονίδη "most dread son of Cronus" (most-dread) | αἰνοτάτην of a thing (14.389) | most-dread claims only the phrase |
| μέλαινα, of ships (black-ships) | κῆρα μέλαιναν "black doom" (5.22, 5.652) | black-ships: `except` those lines |
| ξανθός "fair-haired" (fair-haired) | the names Ξάνθος: the river, a son of Phaenops, horses | fair-haired: `"!^Ξάνθ*"` |
| ὀξύς "sharp" (sharp) | ὀξέα κεκλήγων "screaming shrilly" (2.222); ὀξὺ νόησε "was quick to see" | sharp: `"!ὀξέα κεκλήγ*"`, `"!ὀξὺ νόησε"` |
| δαιμόνιε, δαιμονίη "strange one" (strange-one) | δαίμονι ἶσος "like a god" (5.438, 5.459, 5.884) | strange-one: `"!=δαίμονι"` |
| ἑκηβόλος, of Apollo (far-shooter) | ἑκηβολίαι, Scamandrius' skill (5.54) | far-shooter and apollo: `except: [5.54]` |
| κοῖλος, of ships (hollow-ships) | of a ravine (4.454), of Lacedaemon (2.581) | `except` the other lines on hollow-ships |
| φοῖνιξ, the purple dye (4.141) | Φοῖνιξ, Achilles' old tutor (Book 9) | purple: `"!^Φοίνικ*"`; phoenix claims `^Φοῖνιξ`, `^Φοίνικι`, and will need Φοίνικα (23.360) |
| εὔχομαι, εὐχωλή "pray, prayer" (prayer) | the same words meaning "claim, boast": 1.91, 2.82, 2.160, 2.176, 2.597, 3.430, 4.173, 4.264, 4.405, 4.450, and in Book 5 (euchomai) | `except` the boast lines on prayer, book by book |
| εὐξ*, the prayer stem | ἐΰξοος "polished" (2.390, 4.105) | prayer: `"!ἐϋξοο*"` |
| ἰός "arrow" (arrows) | ἰόν "going" (4.278) | `except` on arrows |
| ἀγγελίη "embassy" (embassy) | "message, news" (13.252, 15.174, 15.640) | embassy `except: [7.416, 13.252]`, and its Book 15 note `except: [15.174, 15.640]` |
| φάρμακα "drugs" (healing) | harmful drugs and poisons in the Odyssey | `except` those lines on healing |
| μέλαινα, of ships (black-ships) | νὺξ μέλαινα "black night" (8.486, 8.502; black-night) | black-ships: `except` those lines (9.65 done); later 10.297, 10.394, 10.468, 24.366, 24.653 |
| θρασύς "bold" (bold) | θρασὺς πόλεμος, the "bold" war (bold-war: 6.254; 10.28) | bold: `except: [6.254]`, and 10.28 later |
| ὠκειάων, of swift horses (swift-footed, from the Book 4 note) | νηῶν ὠκειάων "swift ships" (8.197; swift-ships) | swift-footed: `except: [8.197]` |
| αἰνοτάτη "most dread" (most-dread, 8.423) | αἰνοτάτην ἔριδα "most dread strife" (14.389) | do not add αἰνοτάτην to most-dread |
| πυλάρτης "gatekeeper" (gatekeeper: πυλάρταο) | Πυλάρτης, Trojans of that name (11.491, 16.696) | gatekeeper claims only πυλάρταο |
| ἀρηΐθοος "swift in war" (swift-in-war: ἀρηϊθόων) | Ἀρηΐθοος, the mace-man (Book 7) and Rhigmus' charioteer (20.487) | swift-in-war claims only the lowercase plural |
| μέρμερος "grim" (grim-deeds: μέρμερα ἔργα) | Μέρμερος, a Trojan killed by Antilochus (14.513) | grim-deeds claims the phrase; mermerus claims `^Μέρμερον` (14.513) |
| δῖαν, of the sea (shining-sea) | Ἠῶ δῖαν "brilliant Dawn" (9.240, 9.662) | shining-sea: `except: [9.240, 9.662]` |
| αἰπεῖα "steep" (steep) | Αἴπεια, the town (9.152, 9.294) | steep (Book 9 note): `"=αἰπεῖαν"` |
| ἄσβεστος "unquenchable", of laughter (unquenchable-laughter, 1.599) | of the battle cry (11.50, 11.500, 11.530); later of flame (16.123, 17.89), of Hector's fury (22.96) and of fame (Od. 4.584, 7.333) | unquenchable-laughter claims only the laughter verse; unquenchable-cry claims the battle-cry formula |
| δῖα, of the sea (shining-sea) | Ἠῶ δῖαν "brilliant Dawn" (11.723; brilliant) | shining-sea: `except: [11.723]` |
| μέλαινα, of ships (black-ships) | κῆρα μέλαιναν "black doom" (11.360, 11.443) | black-ships: `except: [11.360, 11.443]` |
| Νηλήϊος, of Nestor (son-of-neleus) | Πύλον Νηλήϊον "Neleian Pylos" (11.682) | son-of-neleus: `except: [11.682]` |
| κρείων "powerful" (powerful) | εὐρὺ κρείων "wide-ruling" (11.107, 11.238, 11.751, 13.112; wide-ruling); κρειῶν "of meat" (11.551 = 17.660) | powerful: `except: [11.107, 11.238, 11.751]`, `except: [13.112]` in its Book 13 note, and `"!=κρειῶν"` |
| περικλυτός "renowned" (famous) | περικλυτὸς ἀμφιγυήεις, Hephaestus' title | famous excludes that phrase |
| σίντης "ravager" (ravager, 11.481) | Σίντιες, the people of Lemnos (1.594) | ravager: the exact form σίντην |
| δέπας περικαλλές, Nestor's cup (the-cup-of-nestor, 11.632) | Priam's cup (24.234) | the-cup-of-nestor: `except: [24.234]` |
| μητέρι μήλων "mother of flocks" (mother-of-flocks, 11.222) | μῆλα, the flocks (lambs) | lambs claims μήλων, so 11.222 counts for both, as 9.479 does |
| βαθείης "deep", of the sea (deep-sea) | of the woods, the sand and the ditch (5.555, 5.587, 8.336) | deep-sea claims only the phrases `"βαθείης βένθεσι λίμνης"` and `"βαθείης ἐξ ἁλὸς"` |
| μακρῇσι "long", of spears (long-spears, 13.782) | long tails (Od. 10.215) | long-spears claims the phrase `"μακρῇσι τετυμμένω ἐγχείῃσιν"` |
| κλυτὰ δώματα "famous house" (famous, 13.21) | the same words elided, κλυτὰ δώματʼ (Od. 5.381) | famous will need the elided phrase when the Odyssey is indexed |
| Διὸς πάϊς "child of Zeus" (son-of-zeus, 13.825) | the Muse (Od. 8.488) | son-of-zeus: `except` it when the Odyssey is indexed |
| ἤϊε Φοῖβε "archer Phoebus" (ieios, 15.365, 20.152) | ἤϊε "went" (1.47, 7.213) | ieios claims the phrase `"ἤϊε Φοῖβε"` only |
| ὠκύμορος "swift-fated", of Achilles (swift-fated) | arrows "of swift death" (15.441; Od. 22.75) | swift-fated claims both, with en "of swift death" |
| μέλαινα, of ships (black-ships) | μελαίνης νυκτὸς ἀμολγῷ "in the dead of black night" (15.324) | black-ships `except: [15.324]`; black-night claims the phrase |
| δῖος "brilliant" (brilliant) | εἰς ἅλα δῖαν, the shining sea (15.161, 15.177, 15.223; as 1.141, 2.152, 14.76) | brilliant `except` these lines |
| ὀξύς "sharp" (sharp) | of the war cry, "shrill" (ὀξεῖα 15.313) | it stays with sharp (en "shrill"); the shrill entry is λιγυρός |
| ὤκιστος πετεηνῶν, of the hawk (15.238) | of the eagle (21.253) | like-a-hawk claims `"ὠκέϊ φασσοφόνῳ"` and `"ἴρηκι ἐοικὼς"` (also 16.582, the same words), not the superlative |
| ψυχρὴ ὑπὸ ῥιπῆς αἰθρηγενέος Βορέαο, of snow (15.171) | the helmets like snowflakes (19.358) | snow-and-hail claims only 15.170 and 15.172; Book 19 will need its own entry or note |

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
| ζυγόν "yoke" (chariot) | the crossbar of a lyre (9.187), rowing benches (Odyssey) | chariot: `except: [9.187]`, and the Odyssey's benches later; lyre claims the phrase `"ἀργύρεον ζυγὸν"` |
| προκαλίζομαι "challenge" (single-combat) | a challenge to athletic contests (4.389, 5.807) | single-combat: `except: [4.389, 5.807]`; contests takes the lines |
| εὔχομαι "boast, claim" | "pray" (prayer) | see the εὔχομαι row above |
| θεῶν, θεόν "of the gods, god" (theos) | θέων "running" (6.54), θέον "ran" (6.238) | theos: `"!=θέων"`, `"!=θέον"` |
| θείη "divine" (divine) | θείῃ "runs", of the stallion (6.507 = 15.264) | divine: `"!θείῃ πεδίοιο"` |
| ἄνα "lord", the vocative (anax: `=ἄνα`) | ἀλλʼ ἄνα "up!" (6.331, 9.247, 18.178, Od. 18.13) | anax: `except` those lines, book by book (6.331, 9.247 done) |
| εἴσατο "seemed" (eidos) | εἴσατο "went", of an arrow (4.138) | eidos: `except: [4.138]` |
| αἶαν "earth" (earth) | Αἶαν, the vocative of Αἴας (7.234, 7.288) | earth: `"!^Αἶαν"` |
| Δίου, the town Dium (2.538) | δίου "brilliant" (7.138) | dium: `^Δίου`; brilliant (Book 7 note): `"!^Δίου"` |
| ὑψηλούς, epithet of Erythini (2.855) | the Achaeans' "high towers" (7.338, 7.437) | erythini: the phrase `"ὑψηλοὺς Ἐρυθίνους"` |
| εὐχ*, εὐξ* "pray" (prayer, euchomai) | εὐχάλκου "of good bronze" (7.12), ἐϋξέστῃς "well-polished" (7.5) | prayer and euchomai: `"!εὐχαλκ*"`, `"!ἐϋξεστ*"` |
| ἀγγελίη "embassy" (embassy) | "message", Idaeus' report (7.416) | embassy: `except: [7.416]`; the Book 9 note excepts 9.422 and 9.649 (ἀγγελίην ἀπόφασθε, "declare my message") |
| πειρᾶν "to try" (peira) | πεῖραν "they threaded (on spits)", from πείρω (7.317) | peira: `=πειρᾶν` |
| ἤλασαν "drove off" cattle (raiding) | τάφρον ἤλασαν "drove a ditch" (7.450) | raiding: `except: [7.450]` |
| ἀνέσταν "rose" for Zeus (rising-for-zeus) | the nine volunteers stand up (7.161) | rising-for-zeus: `except: [7.161]` |
| ἐνδέξια "from left to right", of wine (cupbearing) | the lot carried round (7.184, lots); signs "on the right" (9.236); begging round the room (Od. 17.365) | cupbearing: `except: [7.184, 9.236]`, and the later lines |
| βαθεῖαν "deep" (deep-sea) | the deep ditch of the Achaean wall (7.341, 7.440) | deep-sea: `except: [7.341, 7.440]` |
| μέλαιναν "black", of ships (black-ships) | κῆρα μέλαιναν "black doom" (7.254, as 5.22, 5.652) | black-ships: `except: [7.254]` |
| κρείων "powerful" (powerful) | εὐρὺ κρείων "wide-ruling", of Agamemnon (7.107, 7.322; wide-ruling) | powerful (Book 7 note): `except: [7.107, 7.322]` |
| αἰόλος "flashing, quick" (flashing) | Αἴολος, the keeper of the winds (Od. 10.1–76) | flashing claims only αἰόλον; exclude `^Αἰολ*` once the Odyssey is indexed |
| ῥηξήνωρ "breaker of men" (breaker-of-men) | Ῥηξήνωρ, brother of Alcinous (Od. 7.63, 7.146) | breaker-of-men claims only ῥηξήνορα; add `except` or `!^Ῥηξήνορ*` for the Odyssey |
| τεῖχος "wall" (the-achaean-wall, the-walls-of-troy) | the walls of Thebes (4.378, 4.407), of Pheia (7.135), of the city on the shield (18.514); the wall of Heracles on the plain (20.145) | both entries claim phrases, not the bare word; check every later τεῖχος, τείχεος line |
| τάφρος "ditch" (the-achaean-wall) | the trench Telemachus digs for the axes (Od. 21.120) | the-achaean-wall: `except` it when the Odyssey is indexed |
| πύργους "towers" (the-achaean-wall) | the towers of Troy (18.278, 22.195); 24.443 is the Achaean wall again | the-achaean-wall: the phrases `"πύργους ὑψηλοὺς"`, `"πύργους θʼ ὑψηλούς"`; add 24.443 |
| σκόλοπας "stakes" (the-achaean-wall) | the stakes on which Hector means to set Patroclus' head (σκολόπεσσι 18.177); the palisade on the Phaeacians' walls (Od. 7.45) | the-achaean-wall: add σκολόπεσσιν (12.55, 15.344) and σκόλοπες (12.63), which leave 18.177 alone |
| γέρουσιν "elders" (trojan-elders, 6.113) | the Achaean elders (4.344, 9.70) | trojan-elders: the form βουλευτῇσι and `refs: [6.113]`, not γέρουσιν |
| ἀμφίπολος, δμῳή "handmaid, slave woman" (handmaids) | ἀμφιπολεύω "tend" (Odyssey); δμωῇσι printed without the iota subscript (9.658) | handmaids: `"!ἀμφιπολευ*"` when the Odyssey comes; the Book 9 note adds δμωῇσι |
| σῆμα "grave mound" (tomb) | σῆμα "sign", the signs on Bellerophon's tablet (6.176, 6.178; writing) | tomb: `except: [6.176, 6.178]` |
| ἱστός "mast" (mast) | ἱστός "loom" (6.456, 6.491; loom, weaving) | mast: `except` the loom lines |
| δίφρος "chariot" (chariot) | δίφρος "seat, chair" (6.354; stool) | chariot: `except: [6.354]` |
| ἦ "he spoke, she spoke" (so-he-spoke) | ἦ καί, the particle "truly" (6.441) | so-he-spoke: `except: [6.441]` |
| νύμφη "nymph" (nymphs) | νύμφη "bride, young wife" (νύμφα φίλη 3.130; 9.560, 18.492; νύμφαι Od. 11.38) | nymphs: `except` those lines |
| νηΐς "Naiad" (nymphs, 6.22) | νῆϊς "unknowing" (νήϊδα 7.198, Od. 8.179) | nymphs: `=νηῒς` |
| δῆμος "people, land" (demos) | δημός "fat" (δημὸν 8.240; δημῷ 8.380, 11.818, 13.832) | demos: `"!=δημὸν"`, `"!=δημῷ"` |
| πρυμνήσια "stern-cables" (stern-cables) | πρύμνῃσι, πρυμνῇσι "at the sterns" (8.475; 13.333, 13.762), the same letters as the elided πρυμνήσιʼ | stern-cables: `"!=πρύμνῃσι"`, `"!=πρυμνῇσι"`; stern claims `=πρυμνῇσι` and `=πρυμνῇσιν` |
| γέροντες "elders" (elders) | γέροντας "old men" in general (8.518, the old men on the walls); the Trojan elders (γερόντων 15.721) | elders: `except: [8.518]`, and its Book 15 note `except: [15.721]`; trojan-elders takes 15.721 by `refs` |
| πόσιν "husband" (posis) | ποσίν "feet" (8.339) | posis: `=πόσιν` |
| Τρώϊοι ἵπποι "the horses of Tros" (tros) | Τρώ* "Trojans" (trojans) | trojans: `except: [5.222, 5.265, 8.106]` |
| εὐχωλή, εὔχομαι "vow, pray" (prayer) | "cries of triumph" (4.450 = 8.64), "boasts" (8.229), "boast, claim" (8.190, 8.198, 8.254) | prayer: `except` those lines in each book's note |
| βωμός "altar" (altar) | βωμοί "stand" for the chariot of Zeus (8.441), "pedestals" (Od. 7.100) | altar: `except: [8.441]` |
| μῆλα "sheep, flocks" (sheep, lambs) | μῆλα "fruit" (ἄνθεσι μήλων, 9.542) | lambs: `except: [9.542]` |
| σῦς "boar" (boar) | σύν "with" | boar: `"=σῦν"` |
| ὄϊς "sheep" (sheep) | οἶος "alone" | sheep: `"=ὄϊος"` |
| κύνεος "doglike" (dogs, 9.373) | κύνεον "kissed" (Od. 17.35, 21.224, 22.499) | dogs: the exact form; `except` the Odyssey lines |
| μένεϊ "might" (menos, 7.210) | μένει "stays" (9.634) | menos (Book 7 note): `"=μένεϊ"` |
| ἀρή "curse" (curses: ἀρέων 9.566) | ἀρή "bane" (12.334, 14.485, 18.100, 24.489) | curses claims only κατηρᾶτο, ἐπαράς and ἀρέων |
| εὐνή "bed" (bed) | an animal's lair (εὐνῆφι 15.580; 22.190) | bed: the phrase `"τῆς εὐνῆς ἐπιβήμεναι"`; the-dog-and-the-fawn claims `"ἐξ εὐνῆφι θορόντα"` (15.580) |
| τίω "honor" (time) | τίνω "pay" (τίσω, ἔτισαν) | time: the phrases `"περ ἔτισαν"`, `"τίσω δέ μιν"`, `"τίσει δέ σε"` |
| κλισμός "chair" (throne) | | throne claims κλισμοῖσι (8.436, 9.200; 11.623 later) |
| εὔχομαι "claim" (9.60, 9.161) | εὔχομαι "pray" (prayer) | prayer: the Book 9 note excepts 9.60 and 9.161 |
| σῆμα "mound" (tomb), "sign" (teras) | the mark Odysseus sets by Dolon's spoils (10.466) | tomb and teras: `except: [10.466]`; the-tomb-of-ilus claims the phrase "σήματι Ἴλου" (10.415) |
| ἐΰξου "polished" (10.373) | εὐξ* "pray" (prayer, euchomai) | prayer and euchomai: `"!ἐϋξου"`, with `"!ἐϋξοο*"` and `"!ἐϋξεστ*"` |
| θεῷ "god" (theos) | θέω "run" (10.63), which differs only by accent | theos: `"!=θέω"`, with `"!=θέων"` and `"!=θέον"` |
| ἔπεʼ "words" (epos) | ἕπεʼ "follow!" (10.146), which differs only by breathing | epos (Book 2 note): `"=ἔπεʼ"` |
| βασιλῆα "king" (kings, the Achaean kings) | Rhesus, king of the Thracians (10.494) | kings: `except: [10.494]` |
| ἱμᾶσιν "straps", ζυγόν "yoke" (chariot) | the thongs inside a helmet (10.262); the yoke a heifer has never borne (10.293) | chariot: `except: [10.262, 10.293]` |
| μηρούς "thigh-pieces" (thigh-pieces) | the men's own thighs (10.573) | thigh-pieces: `except: [10.573]` |
| ὄναρ, a dream as a sign (divination) | Diomedes, the "evil dream" standing over Rhesus (10.496) | divination: `except: [10.496]` |
| ἀγορεύω, ἀγρόμενοι (assembly) | speaking among the Argives (10.250); the gathered sentries (10.180); the two Ajaxes talking together, πρὸς ἀλλήλους ἀγόρευον (13.81) | assembly: `except: [10.180, 10.250, 13.81]` |
| εὐνάς "beds" (bed) | εὐναί "anchor-stones" (1.436) | bed: the phrase `"καὶ εὐνάς"` (10.464) |
| βοῶν "of oxen" (cattle) | βοῶν "shouting" (2.224) | cattle: phrases only (`"βοῶν προφερέστεραί"`, 10.352) |
| μῆλα "sheep" (sheep) | the goatherd's flock (4.279) | sheep: `"περὶ μῆλα"` and μήλοισιν only |
| θοή "swift", of the night (swift-night) | θοαὶ νῆες "swift ships" (swift-ships); μέλαινα of the night and of a ewe (black-ships) | swift-ships: `except: [10.394, 10.468]`; black-ships: `except: [10.215, 10.297, 10.394, 10.468]` |
| σκοπός "spy", ἐπίσκοπος "spy" (spies-and-scouts) | σκοπός "target" (Od. 21.425, 22.6); ἐπίσκοπος "guardian" (24.729) and "overseer" (Od. 8.163) | spies-and-scouts: `except` those lines when they come |
| ἠώς "dawn", the time (eos) | Ἠώς, the goddess | eos counts lowercase ἠώς (1.493, 7.433, 7.451, 7.458, 10.251) and excepts only 8.66 ("morning") |
| νεῶν "of ships" (ships) | νέων "of young men" (11.503) | ships: `"!=νέων"` |
| Τρώ* (trojans) | τρωπάω "turn" (τρωπάσκετο 11.568) | trojans: `"!τρωπ*"` |
| πόλεις (polis) | πολεῖς, a form of πολύς "many" (11.708) | polis: `"!=πολεῖς"` |
| θεούς (theos) | θέουσʼ "running" (11.715) | theos: `except: [11.715]` |
| εὐχ* (prayer) | εὖχος "triumph", εὐχόμενος "in triumph", εὔχεαι "you boast" (11.288, 11.290, 11.379, 11.388, 11.445) | prayer (Book 11 note): `except` those lines; euchomai counts them |
| σῆμα (teras) | the mound of Ilus (11.166) | teras: `except: [11.166]` |
| βαθὺ λήϊον, the field of grain (wind-in-the-wheat, 2.147) | the grain the donkey crops (11.560) | wind-in-the-wheat: `except: [11.560]`; Od. 9.134 will need the same |
| πείσεται "will obey" (peitho, 11.789) | πείσεται "will suffer", from πάσχω (20.127) | peitho claims only the phrase `"πείσεται εἰς ἀγαθόν"` |
| κάπρω, two boars (two-boars, 11.324) | κάπρῳ "to a boar" (17.725) | two-boars: the phrase `"ὡς ὅτε κάπρω"` |
| βόες ὥς (lion-among-cattle, 11.172) | the same words at Od. 22.299 | lion-among-cattle: the phrase `"φοβέοντο βόες ὥς"` |
| λίς "lion" (lion, 11.239, 11.480) | λὶς πέτρη "smooth rock" (Od. 12.64, 12.79) | lion will need an `except` in the Odyssey |
| ἠώς "morning" (eos, 11.84) | the goddess (11.1, Ἠῶ δῖαν 11.723) | eos: `except: [11.84]`, as at 8.66; ἠῶθι πρό (11.50), ἠῶθεν (11.555) and ἅμʼ ἠοῖ φαινομένηφι (11.685) are not claimed |
| δούρατα "spears" (spear) | δούρατα πύργων "the timbers of the towers" (12.36) | spear: `except: [12.36]` |
| βόεσσι, βόας "cattle" (cattle) | oxhide shields (12.105, 12.137) | cattle: `except: [12.105, 12.137]` |
| δόμος, οἰκία "house" (house) | the wasps' nest (12.169), the eagle's home (12.221), the sheepfold (12.301) | house: `except: [12.169, 12.221, 12.301]` |
| ἐπιβρίσῃ Διὸς ὄμβρος (river-in-flood, 5.91) | the same words in the snow simile (12.286) | river-in-flood: `except: [12.286]` |
| λαός "people" (laos) | λᾶας "stone": λάων (12.29), λᾶος (12.462) | laos: `"!=λάων"`, `"!=λᾶος"` |
| Τρῶες (trojans) | τρώσεσθαι "be wounded" (12.66) | trojans: `"!=τρώσεσθαι"` |
| εἴσατο "seemed" (eidos) | εἴσατο "went" (12.118) | eidos: `except: [12.118]` |
| θεῖος "divine" (divine) | θείη, a form of τίθημι (12.26) | divine: `except: [12.26]` |
| ἐλαύνω "drive off (cattle)" (raiding) | ἤλασαν "drove (a ditch)" (12.6) | raiding: `except: [12.6]` |
| εὔχομαι "pray" (prayer) | εὖχος "triumph" (12.328), εὐχετόῳτο "boast" (12.391) | prayer: `except: [12.328, 12.391]`; in Book 14 εὔχομαι is "claim" (14.113) and "boast" (14.366; εὐξαμένοιο 14.458, 14.486; εὐχόμενος "in triumph", 14.500), and prayer's Book 14 note excepts those lines |
| βασιλῆες, the Achaean kings (kings) | the Lycian kings (12.319) | kings: `except: [12.319]` |
| δῆμος, the common people (commoners) | δήμου ἀρίστω "the best of the people" (12.447) | commoners: `except: [12.447]` |
| πύργος, the tower of Ilios (the-tower-of-ilios) | Menestheus' tower and the rampart of the Achaean wall (12.332, 12.333, 12.373) | the-tower-of-ilios: `except` those lines |
| θοός "swift" (swift-ships) | θοῆς ἀπὸ χειρός "a swift hand" (12.306), νυκτὶ θοῇ "swift night" (12.463) | swift-ships: `except: [12.306, 12.463]` in its Book 12 note; and νυκτὶ θοῇ, swift Night (14.261), `except: [14.261]` in its Book 14 note, which also adds θοάων, in the Iliad always of ships |
| πύλαι, ὀχῆες, σανίδες, κληΐς (the-gates-of-the-wall) | the gates of Troy, of heaven (5.749, 8.393) and of Hades (9.312); ὀχῆες "clasps" of a belt (4.132, 20.414); κληΐς "collarbone" (8.325, 17.309, 21.117, 22.324), "rowing bench" (16.170) and "key" (Od. 21.6, 21.47) | the-gates-of-the-wall claims phrases only |
| οὖρος "boundary stone" (boundary-stones, οὔροισι 12.421) | οὖρος "fair wind" (1.479), "guardian" (8.80, 11.840) | boundary-stones claims only οὔροισι; οὖρον ἀρούρης (21.405) will need adding |
| σκόλοπες, σκολόπεσσιν "stakes" (the-achaean-wall) | the stockade of the Phaeacians' walls (Od. 7.45) | the-achaean-wall will need an `except` there |
| κεῖτο τανυσθείς "lay stretched out" (the-felled-tree, 13.392 = 16.485) | a different fall (20.483) | the-felled-tree claims the phrase `"δίφρου κεῖτο τανυσθεὶς"` |
| ὥς τε σκώληξ "like a worm" (like-a-worm, 13.654) | 13.655, repeated at 21.119 without the worm | like-a-worm claims only `"ὥς τε σκώληξ"` |
| the lightning of Zeus (like-lightning, 13.242–245) | the end of the simile, repeated of Sirius (22.27, 22.32) | like-lightning leaves the repeated words out of its patterns |
| τέλσον ἀρούρης "the end of the field" (oxen-at-the-plow, 13.707) | the plowing on the shield (18.544) | oxen-at-the-plow does not claim the phrase |
| φή "like" (waves-of-the-icarian-sea 2.144, the-poppy 14.499) | φῆ "said" (2.37, 21.361, 24.608; often in the Odyssey) | both claim phrases only: `"φὴ κύματα μακρὰ θαλάσσης"`, `"φὴ κώδειαν"` |
| ἀστεροπή "lightning" (like-lightning) | Ἀστεροπαῖος, the Paeonian (12.102; Books 17, 21, 23), and Zeus' title ἀστεροπητής | like-lightning claims phrases only: `"ἀστεροπῇ ἐναλίγκιος"` (13.242), `"εἴκελον ἀστεροπῇ"` (14.386) |
| πρόρριζος "roots and all" (the-oak-struck-by-the-thunderbolt, 14.415) | πρόρριζοι, the thickets in the fire (11.157) | the-oak-struck-by-the-thunderbolt: `"πρόρριζος δεινὴ"`; forest-fire's Book 11 note: `"πρόρριζοι πίπτουσιν"` |
| κεκριμένος "settled", of a wind (the-heaving-sea, 14.19) | κεκριμένος "picked, chosen" (10.417; Od. 13.182, 16.248, 24.107) | the-heaving-sea: `"κεκριμένον καταβήμεναι"` |
| ἕρματα "props" of the ships (props, ἔχματα νηῶν 14.410) | ἕρματα "earrings" (earrings, 14.182; Od. 18.297) | props `except: [14.182]`; earrings claims the phrases `"ἕρματα ἧκεν"` and `"τρίγληνα μορόεντα"`; Od. 18.297 will need the same |
| ἄντυξ "rail" of a chariot (chariot) | the rim of a shield (6.118; ἄντυγος 14.412; 15.645) | chariot's Book 5 note claims ἄντυγος, and its Book 14 note `except: [14.412]`; shield claims `"ὑπὲρ ἄντυγος ἀγχόθι"` and, in its Book 15 note, ἄντυγι (15.645) |
| ἀγγελίη "message" (embassy) | Sleep's errand to Poseidon (14.355) | embassy's Book 14 note `except: [14.355]` |
| ἦ "he spoke" (so-he-spoke) | the particle ἦ "truly" (14.49) | so-he-spoke's Book 14 note `except: [14.49]` |
| ζώνη "girdle", a woman's (girdle, ζώνῃ 14.181) | ζωστήρ "belt", a warrior's (belt) | girdle claims ζώνῃ only; the epithets βαθύζωνος and καλλίζωνος stay with their own entries |
| νεός "of a ship" (ships) | νέος "young" | ships: `=νεὸς` |
| δόρυ "spear" (spear) | δόρυ νήϊον "ship's timber" (15.410) | spear `except: [15.410]` |
| ἴστω "let … be witness" (oath) | ἴστω "let him know" (15.217); ἱστῷ "mast" (23.878) | oath claims the phrase `"ἴστω νῦν τόδε Γαῖα"` |
| ἀρή "prayer" (prayer: ἀράων, `"ἐξαίσιον ἀρὴν"`; 15.378, 15.598) | ἀρή "harm" (12.334, 16.512, 24.489) | prayer claims only those forms |
| ἕλκεϊ "wound" (healing) | ἕλκει "drags" (24.52, 24.417) | healing: `=ἕλκεϊ` |
| ἰοί "arrows" (arrows) | ἴοι "might go" (εἶμι), the same letters | arrows: `=ἰοί`, and `=ἰοὶ`, `=ἰοὺς` for the forms with a grave accent |
| λόφος "crest" (helmet) | λόφον "nape" (10.573) | helmet claims only `"ἵππειον λόφον"` |
| κύμβαχον "crown of a helmet" (15.536; helmet) | κύμβαχος "headfirst" (5.586) | helmet claims κύμβαχον only |
| ἐξείλετο "chose" (division-of-spoils) | ἐξείλετο θυμόν "took his life" (15.460, 17.678) | division-of-spoils `"!ἐξείλετο θυμόν"`, and `except: [15.189]` (the world shared by lot) |
| πρυμνή "stern" (stern) | πρυμνήν "base" (5.292, 12.149) | stern claims πρυμνῆς, πρύμνηθεν, ἄφλαστον; 16.124 πρυμνήν (the stern) will need a phrase |
| θρῆνυς "footstool" (14.240; footstool) | a bench in a ship (15.729) | footstool claims `"θρῆνυν ἐφʼ ἑπταπόδην"` (15.729) |
| κλῆρος "lot" (lots) | "allotment" of land (15.498; Od. 14.64) | lots claims both; its Book 15 note links "allotment" |
| ἔλαχον "got by lot" (lots, 15.190) | "got as a share" (9.367; Od. 5.311) | lots claims only the phrases of 15.190–192; 10.430 (a lot) is still unclaimed |
| λούομαι "bathe" (bathing), χαῖται "hair" (hair) | the stallion bathing in the river and its mane (6.508–509 = 15.265–266) | both entries claim the lines, at 15.265–266 as at 6.508–509 |
| δουρὸς ἐρωή "the cast of a spear" (11.357, 15.358) | Achilles' leap (ἐπὶ δουρὸς ἐρωή, 21.251) | the-cast-of-a-spear claims only `"σθένεος πειρώμενος"` (15.359) |

## Aristotle's Poetics

The Poetics brought two new kinds of clash: Homeric patterns that catch Attic words and the names of
later people, and minor Iliad figures who share a name with a hero of tragedy. Clashes that any later
text could repeat get an exclusion in the entry file. Forms that belong to the Poetics alone go into
the entry's Poetics note (`content/library/aristotle/poetics/notes/<id>.md`), whose patterns apply
only to that work (see `docs/index-guide.md`), so that `μιμ*` (mimesis) never meets Homer's μίμνω,
`σύνθεσι*` (systasis) never meets συνθεσίαι "covenants", and Attic name forms (Ποσειδῶνος, Διόνυσον,
Ἄρεως, Κλυταιμήστραν) are matched without widening the Homeric patterns.

| Pattern (entry) | Also catches | Solution |
|---|---|---|
| Ἀθήν* (athena) | Ἀθήνησιν "at Athens" (Poet. 1449b7) | athena: `"!Ἀθήνησιν"` |
| Ζευ* (zeus) | Ζεῦξις, the painter (1450a27, 1461b12) | zeus: `"!Ζευξι*"` |
| Ὀδυσ* (odysseus) | Ὀδύσσεια, the poem | odysseus: `"!Ὀδυσσεια*"` |
| Πέλοπ* (pelops) | Πελοπόννησος (1448a35) | pelops: `"!Πελοποννησ*"` |
| Σωκ* (socus) | Σωκρατικοὶ λόγοι, the Socratic dialogues (1447b11) | socus: `"!Σωκρατ*"` |
| Δανα* (danaans) | Δαναός, the king (1452a28) | danaans: `"!Δαναός"` |
| Τρώ* (trojans) | τρώσεις "woundings" (1452b13) | trojans: `"!τρώσεις"` |
| αἰσχ* (aischros) | Αἰσχύλος, the poet (1449a17 and after) | aischros: `"!Αἰσχυλ*"` |
| νικ* (nike) | Νικοχάρης, the poet (1448a13) | nike: `"!Νικοχαρ*"` |
| Ὀρέστην (orestes-the-achaean, orestes-the-trojan) | Orestes son of Agamemnon, throughout the Poetics | both: `except: [Poetics 1447a8-1462b19]`; orestes claims Ὀρέστης, Ὀρέστην and Ὀρέστου in its Poetics note |
| Εὐρύπυλος (eurypylus, the Thessalian) | Eurypylus son of Telephus, a tragedy (1459b6) | eurypylus: `except: [Poetics 1459b6]` |
| Τρῳάδες (trojan-women) | the tragedy (1459b7) | trojan-women: `except: [Poetics 1459b7]` |
| θεῖος (divine) | θείη "put", from τίθημι (1462b2), as at 12.26 | divine: `except: [12.26, Poetics 1462b2]` |
| ἄττα "father" (old-father) | ἄττα "some", the Attic indefinite (1451b8) | old-father: `except: [Poetics 1451b8]` |
| εἶδος "looks" (eidos), γένος "birth" (genee), ἔλεγχος "disgrace" (elenchos) | Aristotle's technical senses: species, genus, refutation | kept: the Poetics notes explain the sense |

Several plays share a name with their hero (Antigone, Medea, Electra, Orestes, Niobe, Tyro). The
play's title carries its author or "tragedy" in parentheses ("Medea (Euripides)", "Helle (tragedy)"),
so that `[[Medea]]` links the person, and the play's patterns claim its title only where the text
names the play.

## Aristotle's Rhetoric

The first book of the Rhetoric brought more Attic words caught by Homeric patterns, later people who
share a name with an Iliad figure or a Poetics author, and the treatise's own words in two senses.
English-only name linking also needs watching: a person's title links wherever the English names him,
so a later bearer of the name needs an `except` on the earlier entry.

| Pattern (entry) | Also catches | Solution |
|---|---|---|
| Ἀγάθων* (agathon) | ἀγαθῶν “of goods”, throughout | agathon: `"^Ἀγάθων*"` |
| Σώφρον* (sophron) | σώφρονι, σωφρονεῖν, σωφρόνως | sophron: `"^Σώφρον*"` |
| οἰῶν (sheep) | οἵων “of what kind” (1367b18) | sheep: `"=οἰῶν"` |
| ἠθεῖʼ (dear-brother) | ἤθει “by character” (1356a2) | dear-brother: `"=ἠθεῖʼ"` |
| Τρώ* (trojans) | τρῶσαι “to wound” (1374a32) | trojans: `"!τρῶσαι"` |
| ἄττα (old-father) | ἄττα “some” (1356b36, 1369a8) | old-father: `except` |
| χάριν (charis) | χάριν “for the sake of” (1360b7, 1366a32, 1371a16) | charis: `except` |
| φυλακή (night-watch) | the defense of the country (1359b22–1360a9, 1366a6) | night-watch: `except` |
| ἀγορ* (assembly) | ἀγορεύειν “speak in public”, ἀγορά “marketplace” | assembly: `except` |
| σκοπός (spies-and-scouts) | σκοπός “target” (1360b4, 1362a17) | spies-and-scouts: `except` |
| βούλεται (boule) | βούλησις “wish” and its verb (1361b15, 1368a7, 1369a3) | boule: `except` |
| ἔπος (epos) | ὡς ἔπος εἰπεῖν “so to speak” (1357a26) | epos: `except` |
| Ἱππόλοχον (hippolochus, hippolochus-son-of-antimachus) | the first man praised in an encomium (1368a17) | both: `except`; hippolochus-of-the-encomium |
| Jason (jason, by English) | Jason of Pherae (1373a26) | jason: `except`; jason-of-pherae |
| Hippias (hippias-of-thasos, by English) | Hippias, paired with Socrates (1356b34) | hippias-of-thasos: `except`; hippias-of-elis |
| Διονύσιος (dionysius-of-colophon) | Dionysius of Syracuse (1357b31, 1357b34) | dionysius-of-colophon: `except`; dionysius-of-syracuse. Book III's Dionysius “the Brazen” (3.2, 1405a) is a poet and will need his own id |
| Κλεοφ* (cleophon) | Cleophon the demagogue (1375b31) | cleophon: `except`; cleophon-the-demagogue. Book III's Cleophon (3.7, 1408a) is the tragic poet again, and cleophon-the-demagogue will need an `except` there |
| Πλάτων (plato, by English) | probably Plato the comic poet (1376a10) | plato: `except`; plato-the-comic-poet |
| Σοφοκλῆς (sophocles, by English) | Sophocles who spoke for Euctemon (1374b35) | sophocles: `except`; sophocles-the-orator claims the nominative, which in Books II and III is the tragic poet again (2.23, 3.14–18) and will need `except` |
| Courage (courage, by English) | the virtue (1366b11) | courage: `except` |
| Ἀντιγόνη, Ἀντιγόνῃ | Antigone the person (1373b9), the play (1375a34) | antigone: `"=Ἀντιγόνη"`; antigone-play: `"=Ἀντιγόνῃ"` |
| πάθη “emotions” (pathos) | πάθη “properties” (1355b30), πάθῃ “suffer” (1370b6), παθών “the victim” | pathos: `"=πάθη"`, `"=παθῶν"`, `except: [1355b30]` |
| τόπος “topic” (topos) | τόπος “place” (1360a8, 1360a11, 1362a13, and τόποι, τόποις elsewhere) | topos: exact forms and `except` |
| πίστεις “proofs” (pistis) | πίστεις “assurances” (1375a10) | pistis: `except` |
| εἶδος “looks” (eidos), γένος “birth” (genee) | Aristotle's species and genus | kept: the Rhetoric notes explain the sense |

Two names of Book I return in Book II as other men: Callippus, the author of a rhetorical handbook
(2.23, 1399a, 1400a), is not the Callippus who killed Dion (callippus-the-rhetorician), and Herodicus
who mocked Thrasymachus' name (2.23, 1400b) is kept apart from the trainer of 1361b5
(herodicus-who-mocked-thrasymachus); see the Book II table below.

### Rhetoric, Book II

The second book adds the emotions, whose words Homer's patterns sometimes catch, a crowd of fourth-century
people who share names with heroes, and plays and speeches named after their heroes. A play or speech
named in the Greek (“in the Alcmaeon of Theodectes”) gets its own work entry with a phrase pattern, and
the hero's entry an `except` on that line.

| Pattern (entry) | Also catches | Solution |
|---|---|---|
| ^Πάρι* (paris) | Πάριοι “Parians” (1398b11) | paris: `"!^Πάριοι"`, which keeps Πάριος “of Paris” (Il. 3.325); parians |
| Ἀλέξανδρ* (paris) | the Alexander, a lost defense of Paris (1398a22, 1401b20) | paris: `except`; the-alexander |
| Αἴαντ* (ajax) | Theodectes' Ajax (1399b29, 1400a28) | ajax: `except`; ajax-plays: `"^Αἴαντος τοῦ ^Θεοδέκτου"` |
| Alcmaeon (alcmaeon, by English) | Theodectes' Alcmaeon (1397b3) | alcmaeon: `except`; alcmaeon-theodectes |
| Ὀρέστῃ (orestes) | Theodectes' Orestes (1401a36) | orestes: `except`; orestes-theodectes |
| ^Μήδει* (medea) | Carcinus' Medea (1400b10) | medea: `except`; medea-carcinus |
| Meleager (meleager, by English) | Antiphon's Meleager (1399b26) | meleager: `except`; meleager-antiphon |
| Teucer (teucer, by English) | the Teucer, a play (1398a4) | teucer: `except`; teucer-play |
| νόμος (nomos) | Theodectes' Law (1398b6, 1399b1) | nomos: `except`; the-law-theodectes: `"^Νόμου"`, `"^Νόμῳ"` |
| Thebes (thebes-in-egypt, by English) | Boeotian Thebes (1397b9, 1398b3, 1398b18) | thebes-in-egypt: `except`; thebes |
| Thebans (cadmeians, by English); Θηβαῖ* (thebans) | the historical Thebans (1397b32); Θηβαίου, a man's name (Il. 8.120) | cadmeians: `except`; thebans: its forms only in its Rhetoric note |
| Λυκούργου (lycurgus) | Lycurgus the Spartan lawgiver (1398b18) | lycurgus: `except`; lycurgus-of-sparta |
| Samos (samos, by English) | Samos in Ionia and the Samians (1384b32, 1393b23, 1393b32) | samos: `except`; samos-ionia, samians |
| Κλέων* (cleon) | Κλεωνάς “Cleonae” (Il. 2.570); Κλέων as a sample name (*Poetics* 1457a27) | cleon: exact forms and `except` |
| Πειραι* (piraeus) | Πειραΐδαο, “son of Piraeus” (Il. 4.228) | piraeus: `"!^Πειραΐδ*"` |
| Theodorus (theodorus-of-byzantium, by English) | Θεόδωρος as a sample name (*Poetics* 1457a13) | no capitalized alias; the English form only in the Rhetoric note |
| Bias (bias-the-athenian, by English) | Bias of Priene (1389b24) | bias-the-athenian: `except`; bias-of-priene |
| Callippus (callippus, by English) | Callippus the rhetorician (1399a17, 1400a4) | callippus: `except`; callippus-the-rhetorician |
| Herodicus (herodicus, by English) | the Herodicus who mocked Thrasymachus (1400b20) | herodicus: `except`; herodicus-who-mocked-thrasymachus, with `except: [1361b5]` for the trainer of Book I |
| Jason (jason-of-pherae, by English) | Jason the Argonaut, in Carcinus' Medea (1400b13) | jason-of-pherae: `except`; jason |
| Διονύσιος (dionysius-of-colophon) | Dionysius in a sample fallacy (1401b13) | dionysius-of-colophon: `except`; dionysius-of-syracuse, “probably” |
| Δημοσθέν* (demosthenes) | the Demosthenes of the trial over Nicanor (1397b7) | demosthenes: `except`; the-trial-over-nicanor |
| Ἁρμόδιον (harmodius) | Harmodius, a descendant, Iphicrates' opponent (1397b30) | harmodius: `except`; iphicrates-against-harmodius: `"πρὸς ^Ἁρμόδιον"` |
| νικ* (nike) | Νικάνορα “Nicanor” (1397b7) | nike: `"!^Νικάνορ*"` |
| Ἀθήν* (athena) | Ἀθήνησι “at Athens” (1398b1) | athena: `"!Ἀθήνησι"`; athens |
| Ἀξιοῦ (axius) | ἀξίου “worthy” (1379a4) | axius: `"^Ἀξιοῦ"` |
| Ἕλος (helos, helos-pylos) | ἕλος “marsh” (1399a27) | both: `"^Ἕλος"` |
| μαντ* (divination) | Μαντίᾳ “Mantias” (1398b1) | divination: `except`; mantias |
| μάκαρ (child-of-fortune) | Pindar's address to Pan (1401a18) | child-of-fortune: `except` |
| ἀθάνατ* (immortals) | “immortal anger”, “immortal things” (1394b23, 1394b26) | immortals: `except` |
| ἁλὸς (sea) | ἅλς “salt” (1400a12–13) | sea: `except` |
| δήμου (commoners) | the Athenian people (1380b9) | commoners: `except` |
| ἄττα (old-father) | ἄττα “some” (1390b15) | old-father: `except` |
| σχετλι* (hard) | σχετλιασμός “protest” (1395a9) | hard: `except` |
| βούλεται (boule) | βούλεσθαι “wish” (1379a9, 1379a26, 1382a9, 1382a15, 1384a26, 1398a11) | boule: `except` |
| χάριν (charis) | χάριν “for the sake of” (1384a23) | charis: `except` |
| αἰσχ* (aischros) | αἰσχύνη “shame” and its verb | aischros: `"!αἰσχυν*"` in its Rhetoric note; aischyne |
| γνώμ* (gnome) | γνώμῃ “judgment”, as in the jurors' oath (1375a29, 1375b16, 1402b33) | gnome: `"=γνώμη"` and the other cases, not the dative |
| πάθη (pathos) | πάθη “sufferings” (1382b30, 1386a29, 1386b7) | pathos: `except` |
| πείσ* (peitho) | πείσεσθαι “will suffer” (1382b29, 1383b9, 1385b31) | peitho: `except` |
| πολιτεί* (politeia) | πολιτεία “policy”, “political life” (1401b32, 1401b33) | politeia: `except` |
| τόπων (topos) | “places” (1400a16) | topos: `except` |
| μάρτυρ* (non-artistic-proofs) | “witnesses” of Meleager's valor, in a verse (1399b27) | non-artistic-proofs: `except` |
| Σοφοκλῆς (sophocles-the-orator) | Sophocles the poet (1400b17) | sophocles-the-orator: `except`; sophocles: `"Σοφοκλῆς"` in its Rhetoric note |
| Πλάτων (plato-the-comic-poet) | Plato the philosopher (1398b31) | plato-the-comic-poet: `except` |
| Ἀγάθων* (agathos, in its Rhetoric note) | Ἀγάθωνι “Agathon” (1392b7) | agathos: `"!^Ἀγάθων*"` |

### Rhetoric, Book III

Book III names more people than Book I, many of them minor figures of the fourth century who share a
name with a Homeric figure, an earlier entry or a common word, and its terms of style meet Book I's
words in other senses. Forms that belong to the Rhetoric alone are claimed in the Rhetoric notes.

| Pattern (entry) | Also catches | Solution |
|---|---|---|
| αἰσχ* (aischros) | Αἰσχίνης, the Socratic (1417b1) | aischros: `"!^Αἰσχιν*"`; aeschines-of-sphettus |
| Ἀθήν* (athena) | Ἀθήνησι “at Athens” (1418a30) | athena: `"!Ἀθήνησι"`; athens claims it in its Rhetoric note |
| Ἡρακλ* (heracles) | Ἡρακλείτου (1407b13–14) | heracles: `"!Ἡρακλειτ*"`; heraclitus-of-ephesus |
| Νικ* (nike) | Νικήρατον (1413a7, 1413a9), Νίκωνα (1412a34) | nike: `"!^Νικηρατ*"`, `"!^Νίκων*"`; niceratus, nicon |
| εὐχ*, εὐξ* (euchomai, prayer) | Εὐξένῳ, Εὔξενος, a man's name (1406b30–31) | both: `"!^Εὐξεν*"`; euxenus |
| πολιτει*, δημοκρατ* (politeia) | Plato's *Republic*, Πολιτείᾳ (1406b32); Δημοκράτης (1407a8) | politeia: `"!^Δημοκράτ*"`, `except: [1406b32]`; plato: `"^Πολιτείᾳ"`; democrates |
| Θετταλός (jason-of-pherae) | any Thessalian, beside a Laconian (1408a28) | jason-of-pherae: `except`; thessalians |
| Διονύσιος (dionysius-of-colophon, dionysius-of-syracuse) | Dionysius the Brazen, the poet (1405a32) | both: `except`; dionysius-the-brazen |
| Κλεοφ* (cleophon-the-demagogue) | Cleophon the tragic poet (1408a15) | cleophon-the-demagogue: `except: [1408a15]` |
| Σοφοκλῆς (sophocles-the-orator) | the poet, throughout Book III | sophocles-the-orator: `except: [1403b6-1420a8]`; sophocles claims Σοφοκλῆς |
| Καλλίας (callias, Book I's example name) | Callias son of Hipponicus (1405a19–20) | callias: `except: [1403b6-1420a8]`; callias-son-of-hipponicus |
| Πλάτων (plato-the-comic-poet) | the philosopher, author of the *Republic* (1406b32) | plato-the-comic-poet: `except: [1406b32]` |
| Ἑλένη (helen) | Ἑλένης, Isocrates' speech (1414b27) | helen: `except: [1414b27]`; isocrates: `"Ἰσοκράτους Ἑλένης"` |
| ^Αἵμονα (haemon, the Iliad's) | Sophocles' Haemon (1417b20, 1418b31) | haemon: `except`; haemon-son-of-creon |
| οιδιπ* (oedipus) | Carcinus' play *Oedipus* (1417b19) | oedipus: `except: [Rhetoric 1417b19]`; carcinus claims Οἰδίποδι |
| Ἀντιγόνης (antigone, antigone-play) | the play at 1417a30, the woman at 1418b32 | each claims Ἀντιγόνης and excepts the other's line |
| Θεοδώρου (theodorus-the-actor, theodorus-of-byzantium) | the actor (1404b22), the rhetorician (1412a34) | each excepts the other's lines; English “Theodorus” is in each note's `en` |
| Λυκόφρων (lycophron-the-sophist, lycophron-of-pherae) | the sophist (1405b36, 1406a7), the tyrant's brother (1410a18); Ajax's companion in the Iliad (Λυκόφρονα 15.430) | exact forms; English “Lycophron” in each note; lycophron (the Iliad's) `except` the three Rhetoric lines |
| Licymnius, Antimachus, Polybus (by English, the Iliad's) | Licymnius of Chios, Antimachus of Colophon, Polybus of Corinth | the new entries claim the Greek and the English name in their notes, which outrank the English-only link |
| λόφος (helmet) | a hill, Teumessus (1408a4) | helmet: `except: [Rhetoric 1408a4]` |
| μῆνιν ἄειδε (protagoras-on-the-first-line) | the proem quoted as an example (1415a16) | protagoras-on-the-first-line: `except: [Rhetoric 1415a16]` |
| δέδασται (division-of-spoils) | Choerilus' δέδασται, “all has been parceled out” (1415a4) | division-of-spoils: `except: [Rhetoric 1415a4]` |
| βουλή, βούλεται (boule) | βούλῃ “you wish” (1405a15, 1420a6) and βούλεται “wishes”, “wants” (1414a2, 1416a35) | boule: `except` |
| χάριν (charis) | “for the sake of” (1415b39) | charis: `except` |
| δήμου (commoners) | the Paralus, “the people's club” (1411a14) | commoners: `except` |
| ἄτεχν*, ἔντεχν*, πίστεις (pistis, non-artistic-proofs) | delivery “rather outside the art” (1404a16), the epideictic speech's non-artistic part (1416b19), a treaty (1411b16) | both: `except` |
| πάθος (pathos) | the process the riddle describes (1405b2) | pathos: `except` |
| εἰκόν* (eikon, simile) | statues (1361a36; 1411b7, 1411b9) | eikon: `except` |
| περίοδ* (periodos) | γῆς περίοδοι, descriptions of the earth (1360a34) | periodos: `except` |
| ψυχρ* (psychron) | the cold, impassive man (1367a35) | psychron: `except` |
| ὑπερβολ* (hyperbole) | excess, superiority in Book I (1364b3, 1367b6) | hyperbole: exact forms and `except` |
| γλῶττ* (glotta) | “the old language” (1357b10) | glotta: `except` |
| κύρι* (kyrion) | “sovereign”, “authoritative” in Book I | kyrion: exact forms and `except` |
| γραφικ*, ἀγωνιστικ* (styles-of-writing-and-debate) | painting (1371b6); athletic (1360b22, 1361a3, 1361b21) | `except` |
| ἀντικειμεν* (antithesis) | logical opposites in Book I (1364b3, 1368a8) | antithesis: exact forms and `except` |
| ἐνέργεια (before-the-eyes) | the use of possessions (1361a24) | before-the-eyes: `except` |
| παράδειγμα (paradeigma) | a mere instance (1414b27, 1417a13, 1417a29) | paradeigma: `except` |
| αὔξ* (auxesis) | increase and growth (1411b12, 1419b22) | auxesis: `except` |
| διαβάλλονται (diabole) | hearers grow suspicious of art (1404b21) | diabole: `except` |
| γνώμῃ (gnome) | the jurors' “judgment” in Book I; “from conviction” (1419a35) | gnome: the plural forms only |
| ἄρρενα, θήλεα (gender-of-nouns) | male and female children (1361a5) | gender-of-nouns: `except` |
| Names that are also words | ὑγιαίνοντα “healthy”, τελαμών “strap”, ἦραν “they raised”, κύων “dog”, ἀντιδόσει the exchange suit (1416a30), εὐσεβῶν “of the pious” | `^Ὑγιαίνοντα` (hygiaenon), `^Τελαμών` (telamon), `^Ἥραν` (hera), `^Κύων` (diogenes-the-cynic), `^Ἀντιδόσει` (isocrates), `^Εὐσεβῶν` (anaxandrides) |
