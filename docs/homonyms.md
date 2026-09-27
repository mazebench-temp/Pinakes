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

## Peoples whose forms differ only by accent

| Forms | Entries |
|---|---|
| Τρῶες, Τρῶας "Trojans" and Τρῳαί, Τρῳάς "Trojan women" | trojans: `[Τρώ*, "!=Τρῳ*"]`; trojan-women: `["=Τρῳ*"]`. Later books add Τρωϊάδες, which trojans will also need to exclude. |

## People who share a name

| Name | Entries (lines) |
|---|---|
| Αἴας | ajax, Telamonian Ajax; ajax-son-of-oileus (2.527) |
| Λυκάων | lycaon, father of Pandarus (2.826, 4.89, 4.93, often in Book 5; `except: [3.333]`); lycaon-son-of-priam (3.333, Book 21; `except: [2.826, 4.89, 4.93]`) |
| Αἵμων | haemon, Nestor's captain (4.296); haemon-of-thebes, father of Maeon (4.394) |
| Εὐρυμέδων | eurymedon, Agamemnon's charioteer (4.228); Nestor's attendant of the same name (8.114, 11.620: `Εὐρυμέδων` will catch both), and a king of the Giants (Od. 7.58) |
| Αἵμων (again) | Αἱμονίδαο (17.467) is the father of Laerces, a third Haemon |
| Ἀντηνορίδης | helicaon (3.123), laodocus (4.87: laodocus claims the exact dative Ἀντηνορίδῃ, which a later book may use of another son), and Antenor's other sons in later books (Agenor is named directly, 4.467) |
| Λαόδοκος | laodocus, son of Antenor (4.87); a companion of Antilochus with the same name (17.699) will need his own id |
| Χρομίος | chromius, Nestor's captain (4.295); Priam's son (5.160), a Lycian (5.677), a Trojan (8.275), an ally (17.218, 17.494, 17.534), Nestor's brother (Od. 11.286): `Χρομίον` will catch 5.160, 5.677, 8.275 and 17.218 |
| Ἀλάστωρ | alastor, Nestor's captain (4.295); a Lycian (5.677), an Achaean (8.333 = 13.422), the father of Tros (20.463): `Ἀλάστορα` will catch 5.677 |
| Βίας | bias, Nestor's captain (4.296); an Athenian (13.691), the father of Laogonus and Dardanus (20.460) |
| Πελάγων | pelagon, Nestor's captain (4.295); a Lycian (5.695) |
| Ἐχέπωλος | echepolus, son of Thalysias (4.458); Echepolus son of Anchises gives Agamemnon a mare (23.296) |
| Διώρης | diores, the Epeian (2.622, 4.517; exact forms only); Διώρεος, Automedon's father (17.429, 17.474) |
| Ἄντιφος (again) | Book 11 brings Antiphus son of Priam back (11.101–109): antiphus and antiphus-of-maeonia will need `except: [11.104]`, and antiphus-son-of-priam the form Ἄντιφον |
| Ἀγήνωρ (again) | Echeclus, "son of Agenor" (20.474), may be a different Agenor |
| Πείρως, Πείρεως | peirous (2.844, 4.520, 4.525); Rhigmus "son of Peireos" (20.484–485) may be his son |
| Ἰδαῖος | idaeus, Priam's herald (Books 3, 7, 24); a son of Dares with the same name fights in Book 5 |
| Ἀντηνορίδης | helicaon (3.123); Antenor has many other sons in later books (Agenor, Coön, Iphidamas…) |
| Εὐρυβάτης | eurybates, Agamemnon's herald; eurybates-of-ithaca (2.184) |
| Ἐπίστροφος | epistrophus (2.517), epistrophus-of-lyrnessus (2.692), epistrophus-of-the-halizones (2.856) |
| Ἀμφίμαχος | amphimachus (2.620), amphimachus-of-caria (2.870–871) |
| Ἄντιφος | antiphus (2.678), antiphus-of-maeonia (2.864), antiphus-son-of-priam (4.489; Book 11 again) |
| Ἀκάμας | acamas (2.823), acamas-of-thrace (2.844) |
| Ἄδρηστος | adrastus (2.572), adrestus (2.830) |
| Εὔρυτος | eurytus (2.596, 2.730), eurytus-of-elis (2.621) |
| Εὐρύπυλος | eurypylus-of-cos (2.677), eurypylus (2.736) |
| Ἄκτωρ | actor-son-of-azeus (2.513), actor-of-elis (2.621) |
| Κλυμένη | clymene, Helen's handmaid (3.144); a Nereid (18.47) and a heroine of the Odyssey (11.326) |
| Κλυτίος, Ἱκετάων, Πάνθοος | the Trojan elders of 3.146–148, who are also fathers of warriors in later books (Caletor, Melanippus, Euphorbus and Polydamas): the same men, so their entries gain notes, not new ids |

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
| Ξάνθος | xanthus-of-lycia (2.877); the Trojan river Xanthus (Scamander) comes in later books |
| Φρυγίη, Μῃονίη | phrygia and maeonia are places; phrygians and maeonians are peoples (the people's stem must not catch the land: maeonians `[Μῄο*, "!Μῃονίη*"]`, which still lets in Μῃονίς "a Maeonian woman", 4.142) |

## Epithets that also describe other things

A formulaic epithet can describe something else in a later book, where its pattern must not follow it:

| Epithet | Its other use | What to do |
|---|---|---|
| κελαινεφής, of Zeus (lord-of-dark-clouds) | of blood: 4.140, 16.667, 21.167, Od. 11.36 (dark-blood) | `except` those lines on lord-of-dark-clouds (the word order αἷμα κελαινεφές defeats an exclusion) |
| πτερόεις, of words (winged-words) | of arrows: 4.117, 5.171, 16.773, 20.68 (feathered) | keep both entries to phrase patterns |
| κοῖλος, of ships (hollow-ships) | of a ravine (4.454), of Lacedaemon (2.581) | `except` the other lines on hollow-ships |
| φοῖνιξ, the purple dye (4.141) | Φοῖνιξ, Achilles' old tutor (Book 9) | purple will need `"!^Φοίνι*"` from Book 9 on |
| εὔχομαι, εὐχωλή "pray, prayer" (prayer) | the same words meaning "claim, boast": 1.91, 2.82, 2.160, 2.176, 2.597, 3.430, 4.173, 4.264, 4.405, 4.450 (euchomai) | `except` the boast lines on prayer, book by book |
| εὐξ*, the prayer stem | ἐΰξοος "polished" (2.390, 4.105) | prayer: `"!ἐϋξοο*"` |
| ἰός "arrow" (arrows) | ἰόν "going" (4.278) | `except` on arrows |
| ἀγγελίη "embassy" (embassy) | "message, news" (13.252, 15.640) | `except` those lines on embassy |
| φάρμακα "drugs" (healing) | harmful drugs and poisons in the Odyssey | `except` those lines on healing |

