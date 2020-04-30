var CLASS = [{"name":"Hierophant","attribute":["str","int"],"tag":["Totem","Caster"],"exclude":["Ailment"],"weight":10},
{"name":"Inquisitor","attribute":["str","int"],"tag":[],"exclude":["Corruption"],"weight":10},
{"name":"Guardian","attribute":["str","int"],"tag":["Summoner","Aura"],"exclude":[],"weight":10},
{"name":"Necromancer","attribute":["int"],"tag":["Summoner","Aura","Fire"],"exclude":[],"weight":10},
{"name":"Elementalist","attribute":["int"],"tag":["Golem","Herald"],"exclude":["Ailment","Corruption"],"weight":10},
{"name":"Occultist","attribute":["int"],"tag":["Corruption","Shiver","Curse"],"exclude":[],"weight":10},
{"name":"Saboteur","attribute":["int","dex"],"tag":["Trap","Mine"],"exclude":["Totem"],"weight":10},
{"name":"Assassin","attribute":["int","dex"],"tag":[],"exclude":["Duration","Summoner"],"weight":10},
{"name":"Trickster","attribute":["int","dex"],"tag":["Duration"],"exclude":["Construct"],"weight":10},
{"name":"Raider","attribute":["dex"],"tag":[],"exclude":["Summoner","Caster"],"weight":10},
{"name":"Deadeye","attribute":["dex"],"tag":[],"exclude":[],"weight":10},
{"name":"Pathfinder","attribute":["dex"],"tag":["Multi Element"],"exclude":[],"weight":10},
{"name":"Slayer","attribute":["dex","str"],"tag":[],"exclude":["Summoner","Caster"],"weight":10},
{"name":"Champion","attribute":["dex","str"],"tag":[],"exclude":["Caster"],"weight":10},
{"name":"Gladiator","attribute":["dex","str"],"tag":[],"exclude":["Summoner","Caster"],"weight":10},
{"name":"Chieftain","attribute":["str"],"tag":["Totem"],"exclude":["Summoner"],"weight":10},
{"name":"Juggernaut","attribute":["str"],"tag":[],"exclude":["Summoner"],"weight":10},
{"name":"Berserker","attribute":["str"],"tag":[],"exclude":["Summoner","Caster"],"weight":10},
{"name":"Ascendant","attribute":["str","int","dex"],"tag":[],"exclude":[],"weight":12}];
var CLASS_F= [];

var TAG=[{"name":"Dealer","domain":"Dealer","level":0,"weight":0,"subtag":["Construct","Trigger","Self"],"exclusion":[],"tooltip":"Broad category of what is dealing the damage"},
{"name":"Construct","domain":"Dealer","level":1,"weight":75,"subtag":["Trap","Mine","Totem"],"exclusion":[],"tooltip":"You have to deal damage by proxy"},
{"name":"Trap","domain":"Dealer","level":2,"weight":100,"subtag":[],"exclusion":["Melee","Summoner","Shield"],"tooltip":"You have to deal damage with Traps"},
{"name":"Mine","domain":"Dealer","level":2,"weight":100,"subtag":[],"exclusion":["Melee","Summoner","Shield"],"tooltip":"You have to deal damage with Mines"},
{"name":"Totem","domain":"Dealer","level":2,"weight":100,"subtag":[],"exclusion":["Shield"],"tooltip":"You have to deal damage with Totems"},
{"name":"Trigger","domain":"Dealer","level":1,"weight":75,"subtag":["Channel","Cast on Crit","Spellslinger","Unique"],"exclusion":["Zombie","Spectre","Golem","Herald"],"tooltip":"You have to deal damage by trigger"},
{"name":"Channel","domain":"Dealer","level":2,"weight":100,"subtag":[],"exclusion":["Ailment","Melee","Shield","Ranged"],"tooltip":"You have to deal damage with Cast while Channeling"},
{"name":"Cast on Crit","domain":"Dealer","level":2,"weight":100,"subtag":[],"exclusion":["Ailment","Melee","Shield","Ranged"],"tooltip":"You have to deal damage with Cast on Crit"},
{"name":"Spellslinger","domain":"Dealer","level":2,"weight":100,"subtag":[],"exclusion":["Melee","Bow","Shield"],"tooltip":"You have to deal damage with Spellslinger"},
{"name":"Manual","domain":"Dealer","level":1,"weight":10,"subtag":["Brand","Self"],"exclusion":[],"tooltip":"You have to deal damage yourself"},
{"name":"Self","domain":"Dealer","level":2,"weight":100,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage with your skills"},
{"name":"Brand","domain":"Dealer","level":2,"weight":5,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage with Brands"},
{"name":"Holder","domain":"Holder","level":0,"weight":0,"subtag":["Summoner","Melee","Ranged","Caster","Shield"],"exclusion":[],"tooltip":"Broad category of how your dealing damage"},
{"name":"Summoner","domain":"Holder","level":1,"weight":50,"subtag":["Spectre","Zombie","Golem","Herald","Army","Unique"],"exclusion":["Duration"],"tooltip":"You have to deal damage with Minions"},
{"name":"Zombie","domain":"Holder","level":2,"weight":15,"subtag":[],"exclusion":["Construct","Trigger"],"tooltip":"You have to deal damage with Zombies"},
{"name":"Spectre","domain":"Holder","level":2,"weight":100,"subtag":[],"exclusion":["Construct","Trigger"],"tooltip":"You have to deal damage with Spectre"},
{"name":"Golem","domain":"Holder","level":2,"weight":20,"subtag":[],"exclusion":["Construct","Trigger"],"tooltip":"You have to deal damage with Golems"},
{"name":"Herald","domain":"Holder","level":2,"weight":20,"subtag":[],"exclusion":["Construct","Trigger"],"tooltip":"You have to deal damage with Heralds"},
{"name":"Army","domain":"Holder","level":2,"weight":100,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage with temporary Minions"},
{"name":"Melee","domain":"Holder","level":1,"weight":100,"subtag":["One handed","Dual Wield","Two handed","Barefist"],"exclusion":["Trap","Mine","Cast on Crit","Spellslinger","Duration"],"tooltip":"You have to deal damage with a Melee weapon"},
{"name":"One handed","domain":"Holder","level":2,"weight":100,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage with a One handed weapon and Shield"},
{"name":"Dual Wield","domain":"Holder","level":2,"weight":100,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage with two One handed weapon"},
{"name":"Two handed","domain":"Holder","level":2,"weight":100,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage with a Two handed weapon"},
{"name":"Barefist","domain":"Holder","level":2,"weight":0,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage with your bare fist"},
{"name":"Ranged","domain":"Holder","level":1,"weight":100,"subtag":["Bow","Wand"],"exclusion":["Cast on Crit"],"tooltip":"You have to deal damage with a Ranged weapon"},
{"name":"Bow","domain":"Holder","level":2,"weight":100,"subtag":[],"exclusion":["Spellslinger"],"tooltip":"You have to deal damage with a Bow weapon"},
{"name":"Wand","domain":"Holder","level":2,"weight":100,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage with a Wand weapon"},
{"name":"Caster","domain":"Holder","level":1,"weight":100,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage with Spell"},
{"name":"Shield","domain":"Holder","level":1,"weight":5,"subtag":[],"exclusion":["Trap","Mine","Cast on Crit","Spellslinger","Duration"],"tooltip":"You have to deal damage with a Shield weapon"},
{"name":"Taker","domain":"Taker","level":0,"weight":0,"subtag":["Duration","Hit","Support"],"exclusion":[],"tooltip":"Broad category of what damage your are dealing"},
{"name":"Duration","domain":"Taker","level":1,"weight":33,"subtag":["Corruption","Shiver","Burning"],"exclusion":["Melee","Summoner","Shield"],"tooltip":"You have to deal Damage over time"},
{"name":"Corruption","domain":"Taker","level":2,"weight":100,"subtag":[],"exclusion":["Wand"],"tooltip":"You have to deal Chaos Damage over time"},
{"name":"Shiver","domain":"Taker","level":2,"weight":100,"subtag":[],"exclusion":["Ranged"],"tooltip":"You have to deal Cold Damage over time"},
{"name":"Burning","domain":"Taker","level":2,"weight":100,"subtag":[],"exclusion":["Ranged"],"tooltip":"You have to deal Fire Damage over time"},
{"name":"Hit","domain":"Taker","level":1,"weight":100,"subtag":["Pure","Conversion","Multi Element","Mana","Ailment"],"exclusion":[],"tooltip":"You have to deal damage with Hits"},
{"name":"Pure","domain":"Taker","level":2,"weight":100,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage of one type"},
{"name":"Conversion","domain":"Taker","level":2,"weight":75,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage with converted damage"},
{"name":"Multi Element","domain":"Taker","level":2,"weight":25,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage of multiple type"},
{"name":"Mana","domain":"Taker","level":2,"weight":5,"subtag":[],"exclusion":["Construct","Trigger","Melee","Summoner","Shield","Ranged"],"tooltip":"You have to deal damage with Archmage"},
{"name":"Ailment","domain":"Taker","level":2,"weight":25,"subtag":[],"exclusion":["Construct","Trigger"],"tooltip":"You have to deal damage with Ailments from your hits"},
{"name":"Support","domain":"Taker","level":1,"weight":0,"subtag":["Aura","Curse","Defense","Warcry","Unique"],"exclusion":[],"tooltip":"You have to help other doing damage"},
{"name":"Aura","domain":"Taker","level":2,"weight":0,"subtag":[],"exclusion":[],"tooltip":"You have to help other with Aura"},
{"name":"Curse","domain":"Taker","level":2,"weight":0,"subtag":[],"exclusion":[],"tooltip":"You have to help other with Curse"},
{"name":"Defense","domain":"Taker","level":2,"weight":0,"subtag":[],"exclusion":[],"tooltip":"You have to help other in their defense"},
{"name":"Warcry","domain":"Taker","level":2,"weight":0,"subtag":[],"exclusion":[],"tooltip":"You have to help other with Warcry"},
{"name":"Unique","domain":"Unique","level":0,"weight":0,"subtag":[],"exclusion":[],"tooltip":"You have to use a skill from a unique"}];
var TAG_F= [];

var GEM=[{"name":"Animate Weapon","attribute":"dex","holder":["Army"],"dealer":["Totem","Trigger","Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Arctic Armour","attribute":"dex","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Artillery Ballista","attribute":"dex","holder":["Bow"],"dealer":["Totem"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Barrage","attribute":"dex","holder":["Ranged"],"dealer":["Dealer"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Bear Trap","attribute":"dex","holder":["Caster"],"dealer":["Trap"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Blade Blast","attribute":"dex","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Blade Flurry","attribute":"dex","holder":["One handed"],"dealer":["Self","Channel"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Blade Vortex","attribute":"dex","holder":["Caster"],"dealer":["Totem","Self","Trigger"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Bladefall","attribute":"dex","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Blast Rain","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Blink Arrow","attribute":"dex","holder":["Movement"],"dealer":["Movement"],"taker":["Movement"],"isunique":"no","weight":1},
{"name":"Blood Rage","attribute":"dex","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Burning Arrow","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Conversion","Burning"],"isunique":"no","weight":1},
{"name":"Caustic Arrow","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Corruption"],"isunique":"no","weight":1},
{"name":"Charged Dash","attribute":"dex","holder":["Melee"],"dealer":["Self","Channel"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Cobra Lash","attribute":"dex","holder":["One handed"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Cremation","attribute":"dex","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Cyclone","attribute":"dex","holder":["Melee"],"dealer":["Self","Channel"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Dash","attribute":"dex","holder":["Movement"],"dealer":["Movement"],"taker":["Movement"],"isunique":"no","weight":1},
{"name":"Desecrate","attribute":"dex","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Detonate Dead","attribute":"dex","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure","Ailment"],"isunique":"no","weight":1},
{"name":"Double Strike","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Dual Strike","attribute":"dex","holder":["Dual Wield"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Elemental Hit Melee","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Multi Element"],"isunique":"no","weight":1},
{"name":"Elemental Hit Bow","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Multi Element"],"isunique":"no","weight":1},
{"name":"Elemental Hit Wand","attribute":"dex","holder":["Wand"],"dealer":["Dealer"],"taker":["Multi Element"],"isunique":"no","weight":1},
{"name":"Ensnaring Arrow","attribute":"dex","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Ethereal Knives","attribute":"dex","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Explosive Arrow","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Conversion","Ailment"],"isunique":"no","weight":1},
{"name":"Explosive Trap","attribute":"dex","holder":["Caster"],"dealer":["Trap"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Fire Trap","attribute":"dex","holder":["Caster"],"dealer":["Trap"],"taker":["Burning","Hit"],"isunique":"no","weight":1},
{"name":"Flamethrower Trap","attribute":"dex","holder":["Caster"],"dealer":["Trap"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Flicker Strike","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Frenzy Melee","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Frenzy Ranged","attribute":"dex","holder":["Ranged"],"dealer":["Dealer"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Frost Blades","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Galvanic Arrow","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Grace","attribute":"dex","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1},
{"name":"Haste","attribute":"dex","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1},
{"name":"Hatred","attribute":"dex","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1},
{"name":"Herald of Agony","attribute":"dex","holder":["Herald"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Herald of Ice","attribute":"dex","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Ice Shot","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Ice Trap","attribute":"dex","holder":["Caster"],"dealer":["Trap"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Lacerate","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Pure","Ailment"],"isunique":"no","weight":1},
{"name":"Lancing Steel","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Pure","Ailment"],"isunique":"no","weight":1},
{"name":"Lightning Arrow","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Lightning Strike","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Mirror Arrow","attribute":"dex","holder":["Army"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Pestilent Strike","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Conversion","Ailment"],"isunique":"no","weight":1},
{"name":"Phase Run","attribute":"dex","holder":["Movement"],"dealer":["Movement"],"taker":["Movement"],"isunique":"no","weight":1},
{"name":"Plague Bearer","attribute":"dex","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Poacher's Mark","attribute":"dex","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1},
{"name":"Precision","attribute":"dex","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1},
{"name":"Projectile Weakness","attribute":"dex","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1},
{"name":"Puncture Melee","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Pure","Ailment"],"isunique":"no","weight":1},
{"name":"Puncture Bow","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Pure","Ailment"],"isunique":"no","weight":1},
{"name":"Purity of Ice","attribute":"dex","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1},
{"name":"Rain of Arrows","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Reave","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Riposte","attribute":"dex","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Scourge Arrow","attribute":"dex","holder":["Bow"],"dealer":["Totem","Channel","Self"],"taker":["Conversion","Ailment"],"isunique":"no","weight":1},
{"name":"Seismic Trap","attribute":"dex","holder":["Caster"],"dealer":["Trap"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Shattering Steel","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Shrapnel Ballista","attribute":"dex","holder":["Bow"],"dealer":["Totem"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Siege Ballista","attribute":"dex","holder":["Bow"],"dealer":["Totem"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Smoke Mine","attribute":"dex","holder":["Movement"],"dealer":["Movement"],"taker":["Movement"],"isunique":"no","weight":1},
{"name":"Spectral Shield Throw","attribute":"dex","holder":["Shield"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Spectral Throw","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Split Arrow","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Summon Ice Golem","attribute":"dex","holder":["Golem"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Temporal Chains","attribute":"dex","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1},
{"name":"Tornado Shot","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Toxic Rain","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Corruption"],"isunique":"no","weight":1},
{"name":"Unearth","attribute":"dex","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Unearth Archer","attribute":"dex","holder":["Army"],"dealer":["Totem","Channel","Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Venom Gyre","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Conversion","Ailment"],"isunique":"no","weight":1},
{"name":"Viper Strike","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Conversion","Ailment"],"isunique":"no","weight":1},
{"name":"Volatile Dead","attribute":"dex","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Whirling Blades","attribute":"dex","holder":["Movement"],"dealer":["Movement"],"taker":[],"isunique":"no","weight":1},
{"name":"Wild Strike","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Multi Element"],"isunique":"no","weight":1},
{"name":"Withering Step","attribute":"dex","holder":["Movement"],"dealer":["Movement"],"taker":[],"isunique":"no","weight":1},
{"name":"Arc","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Arcane Cloak","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":[],"isunique":"no","weight":1},
{"name":"Arctic Breath","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Shiver"],"isunique":"no","weight":1},
{"name":"Armageddon Brand","attribute":"int","holder":["Caster"],"dealer":["Brand"],"taker":["Pure","Ailment"],"isunique":"no","weight":1},
{"name":"Assassin's Mark","attribute":"int","holder":["Curse"],"dealer":["Curse"],"taker":[],"isunique":"no","weight":1},
{"name":"Ball Lightning","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Bane","attribute":"int","holder":["Caster"],"dealer":["Self"],"taker":["Corruption"],"isunique":"no","weight":1},
{"name":"Blight","attribute":"int","holder":["Caster"],"dealer":["Self","Channel"],"taker":["Corruption"],"isunique":"no","weight":1},
{"name":"Bodyswap","attribute":"int","holder":["Movement"],"dealer":["Movement"],"taker":[],"isunique":"no","weight":1},
{"name":"Bone Offering","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":[],"isunique":"no","weight":1},
{"name":"Brand Recall","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":[],"isunique":"no","weight":1},
{"name":"Clarity","attribute":"int","holder":["Aura"],"dealer":["Aura"],"taker":[],"isunique":"no","weight":1},
{"name":"Cold Snap","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Shiver"],"isunique":"no","weight":1},
{"name":"Conductivity","attribute":"int","holder":["Curse"],"dealer":["Curse"],"taker":[],"isunique":"no","weight":1},
{"name":"Contagion","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Conversion Trap","attribute":"int","holder":["Army"],"dealer":["Trap"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Convocation","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Dark Pact","attribute":"int","holder":["Caster"],"dealer":["Totem","Trigger","Self"],"taker":["Pure","Ailment"],"isunique":"no","weight":1},
{"name":"Despair","attribute":"int","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1},
{"name":"Discharge","attribute":"int","holder":["Caster"],"dealer":["Trigger","Self"],"taker":["Multi Element"],"isunique":"no","weight":1},
{"name":"Discipline","attribute":"int","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1},
{"name":"Divine Ire","attribute":"int","holder":["Caster"],"dealer":["Totem","Channel","Self"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Elemental Weakness","attribute":"int","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1},
{"name":"Enfeeble","attribute":"int","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1},
{"name":"Essence Drain","attribute":"int","holder":["Caster"],"dealer":["Self"],"taker":["Corruption"],"isunique":"no","weight":1},
{"name":"Fireball","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure","Ailment"],"isunique":"no","weight":1},
{"name":"Firestorm","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Flame Dash","attribute":"int","holder":["Movement"],"dealer":["Movement"],"taker":["Movement"],"isunique":"no","weight":1},
{"name":"Flame Surge","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Flameblast","attribute":"int","holder":["Caster"],"dealer":["Totem","Channel","Self"],"taker":["Pure","Ailment"],"isunique":"no","weight":1},
{"name":"Flammability","attribute":"int","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1},
{"name":"Flesh Offering","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Freezing Pulse","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Frost Bomb","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Frost Wall","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Frostbite","attribute":"int","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1},
{"name":"Frostblink","attribute":"int","holder":["Movement"],"dealer":["Movement"],"taker":["Movement"],"isunique":"no","weight":1},
{"name":"Frostbolt","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Glacial Cascade","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Herald of Thunder","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Ice Nova","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Ice Spear","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Icicle Mine","attribute":"int","holder":["Caster"],"dealer":["Mine"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Incinerate","attribute":"int","holder":["Caster"],"dealer":["Totem","Channel","Self"],"taker":["Pure","Ailment"],"isunique":"no","weight":1},
{"name":"Kinetic Blast","attribute":"int","holder":["Wand"],"dealer":["Dealer"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Kinetic Bolt","attribute":"int","holder":["Wand"],"dealer":["Dealer"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Lightning Spire Trap","attribute":"int","holder":["Caster"],"dealer":["Trap"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Lightning Tendrils","attribute":"int","holder":["Caster"],"dealer":["Totem","Channel","Self"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Lightning Trap","attribute":"int","holder":["Caster"],"dealer":["Trap"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Lightning Warp","attribute":"int","holder":["Movement"],"dealer":["Movement"],"taker":["Movement"],"isunique":"no","weight":1},
{"name":"Magma Orb","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Malevolence","attribute":"int","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1},
{"name":"Orb of Storms","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Power Siphon","attribute":"int","holder":["Wand"],"dealer":["Dealer"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Purifying Flame","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Purity of Elements","attribute":"int","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1},
{"name":"Purity of Lightning","attribute":"int","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1},
{"name":"Pyroclast Mine","attribute":"int","holder":["Caster"],"dealer":["Mine"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Raise Spectre","attribute":"int","holder":["Spectre"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Raise Zombie","attribute":"int","holder":["Zombie"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Righteous Fire","attribute":"int","holder":["Caster"],"dealer":["Self","Totem"],"taker":["Burning"],"isunique":"no","weight":1},
{"name":"Scorching Ray","attribute":"int","holder":["Caster"],"dealer":["Totem","Channel","Self"],"taker":["Burning"],"isunique":"no","weight":1},
{"name":"Shock Nova","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Siphoning Trap","attribute":"int","holder":["Caster"],"dealer":["Trap"],"taker":["Shiver"],"isunique":"no","weight":1},
{"name":"Soulrend","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Corruption"],"isunique":"no","weight":1},
{"name":"Spark","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Spirit Offering","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Storm Brand","attribute":"int","holder":["Caster"],"dealer":["Brand"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Storm Burst","attribute":"int","holder":["Caster"],"dealer":["Totem","Channel","Self"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Storm Call","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Stormbind","attribute":"int","holder":["Caster"],"dealer":["Totem","Channel","Self"],"taker":["Mana"],"isunique":"no","weight":1},
{"name":"Stormblast Mine","attribute":"int","holder":["Caster"],"dealer":["Mine"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Summon Carrion Golem","attribute":"int","holder":["Golem"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Summon Chaos Golem","attribute":"int","holder":["Golem"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Summon Holy Relic","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Summon Lightning Golem","attribute":"int","holder":["Golem"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Summon Raging Spirit","attribute":"int","holder":["Army"],"dealer":["Self","Trigger"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Summon Skeletons","attribute":"int","holder":["Army"],"dealer":["Self","Trigger"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Summon Skitterbots","attribute":"int","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1},
{"name":"Tempest Shield","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Vortex","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Shiver"],"isunique":"no","weight":1},
{"name":"Wave of Conviction","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Winter Orb","attribute":"int","holder":["Caster"],"dealer":["Totem","Channel","Self"],"taker":["Pure"],"isunique":"no","weight":1},
{"name":"Wither","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":[],"isunique":"no","weight":1},
{"name":"Wrath","attribute":"int","holder":["Aura"],"dealer":["Aura"],"taker":[],"isunique":"no","weight":1},
{"name":"Zealotry","attribute":"int","holder":["Aura"],"dealer":["Aura"],"taker":[],"isunique":"no","weight":1},
{"name":"Abyssal Cry","attribute":"str","holder":["Warcry"],"dealer":["Warcry"],"taker":["Warcry"],"isunique":"no","weight":1},
{"name":"Ancestral Protector","attribute":"str","holder":["Melee"],"dealer":["Totem"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Ancestral Warchief","attribute":"str","holder":["Melee"],"dealer":["Totem"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Anger","attribute":"str","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1},
{"name":"Animate Guardian","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Berserk","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Bladestorm","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Blood and Sand","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Chain Hook","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Cleave","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Consecrated Path","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Decoy Totem","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Determination","attribute":"str","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1},
{"name":"Devouring Totem","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Dominating Blow","attribute":"str","holder":["Army"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Dread Banner","attribute":"str","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1},
{"name":"Earthquake","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Enduring Cry","attribute":"str","holder":["Warcry"],"dealer":["Warcry"],"taker":["Warcry"],"isunique":"no","weight":1},
{"name":"Flesh and Stone","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Glacial Hammer","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Ground Slam","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Heavy Strike","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Herald of Ash","attribute":"str","holder":["Holder"],"dealer":["Self"],"taker":["Burning"],"isunique":"no","weight":1},
{"name":"Herald of Purity","attribute":"str","holder":["Herald"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Holy Flame Totem","attribute":"str","holder":["Caster"],"dealer":["Totem"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Ice Crash","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Immortal Call","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Infernal Blow","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Leap Slam","attribute":"str","holder":["Movement"],"dealer":["Movement"],"taker":["Movement"],"isunique":"no","weight":1},
{"name":"Molten Shell","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Molten Strike","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Perforate","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Pride","attribute":"str","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1},
{"name":"Punishment","attribute":"str","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1},
{"name":"Purity of Fire","attribute":"str","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1},
{"name":"Rallying Cry","attribute":"str","holder":["Warcry"],"dealer":["Warcry"],"taker":["Warcry"],"isunique":"no","weight":1},
{"name":"Reckoning","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Rejuvenation Totem","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Searing Bond","attribute":"str","holder":["Caster"],"dealer":["Totem"],"taker":["Burning"],"isunique":"no","weight":1},
{"name":"Shield Charge","attribute":"str","holder":["Movement"],"dealer":["Movement"],"taker":["Movement"],"isunique":"no","weight":1},
{"name":"Shockwave Totem","attribute":"str","holder":["Caster"],"dealer":["Totem"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Smite","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Static Strike","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Steelskin","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Summon Flame Golem","attribute":"str","holder":["Golem"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Summon Stone Golem","attribute":"str","holder":["Golem"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Sunder","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Sweep","attribute":"str","holder":["Two handed"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1},
{"name":"Tectonic Slam","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Conversion"],"isunique":"no","weight":1},
{"name":"Vengeance","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Vigilant Strike","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1},
{"name":"Vitality","attribute":"str","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1},
{"name":"Vulnerability","attribute":"str","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1},
{"name":"War Banner","attribute":"str","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1},
{"name":"Warlord's Mark","attribute":"str","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1}];
var GEM_F= [];

var KEYSTONE=[{"name":"-","isunique":"no","attribute":["dex","int","str"],"weight":100,"require":[],"exclusion":[]},
{"name":"Phase Acrobatics","isunique":"no","attribute":["dex","int"],"weight":5,"require":[],"exclusion":[]},
{"name":"Ancestral Bond","isunique":"no","attribute":["int","str"],"weight":5,"require":["Totem"],"exclusion":[]},
{"name":"Avatar of Fire","isunique":"no","attribute":["int","str"],"weight":5,"require":["Conversion"],"exclusion":[]},
{"name":"Blood Magic","isunique":"no","attribute":["str"],"weight":2,"require":[],"exclusion":[]},
{"name":"Chaos Inoculation","isunique":"no","attribute":["int","dex"],"weight":3,"require":[],"exclusion":[]},
{"name":"Eldritch Battery","isunique":"no","attribute":["int","dex"],"weight":5,"require":[],"exclusion":[]},
{"name":"Elemental Equilibrium","isunique":"no","attribute":["int","str"],"weight":5,"require":["Duration","Multi Element"],"exclusion":["Corruption","Ailment"]},
{"name":"Elemental Overload","isunique":"no","attribute":["int","str"],"weight":5,"require":["Mixed"],"exclusion":[]},
{"name":"Ghost Reaver","isunique":"no","attribute":["int","dex"],"weight":5,"require":[],"exclusion":["Duration","Ailment"]},
{"name":"Iron Grip","isunique":"no","attribute":["dex","str"],"weight":5,"require":["Ranged"],"exclusion":["Int"]},
{"name":"Mind over Matter","isunique":"no","attribute":["int","str"],"weight":5,"require":[],"exclusion":["Dex"]},
{"name":"Minion Instability","isunique":"no","attribute":["int","str"],"weight":5,"require":["Army"],"exclusion":[]},
{"name":"Perfect Agony","isunique":"no","attribute":["int","dex"],"weight":5,"require":["Ailment"],"exclusion":[]},
{"name":"Point Blank","isunique":"no","attribute":["dex","str"],"weight":5,"require":["Ranged"],"exclusion":[]},
{"name":"Resolute Technique","isunique":"no","attribute":["dex","str"],"weight":5,"require":["Melee"],"exclusion":[]},
{"name":"Unwavering Stance","isunique":"no","attribute":["dex","str"],"weight":5,"require":[],"exclusion":[]},
{"name":"Vaal Pact","isunique":"no","attribute":["dex","str"],"weight":5,"require":[],"exclusion":["Duration","Ailment"]},
{"name":"Wicked Ward","isunique":"no","attribute":["int","dex"],"weight":5,"require":[],"exclusion":[]},
{"name":"Divine Flesh","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[]},
{"name":"Eternal Youth","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[]},
{"name":"Corrupted Soul","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[]},
{"name":"Strength of Blood","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[]},
{"name":"Tempered by War","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[]},
{"name":"Glancing Blows","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[]},
{"name":"Wind Dancer","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[]},
{"name":"Dance with Death","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[]},
{"name":"Second Sight","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":["Melee"],"exclusion":[]},
{"name":"The Agnostic","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[]},
{"name":"Inner Conviction","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":["Caster"],"exclusion":[]},
{"name":"Power of Purpose","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[]},
{"name":"Supreme Decadence","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[]},
{"name":"Supreme Grandstanding","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[]},
{"name":"Supreme Ego","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[]},
{"name":"Disciple of Kitava","isunique":"yes","attribute":["dex","int","str"],"weight":3,"require":[],"exclusion":[]},
{"name":"Lone Messenger","isunique":"yes","attribute":["dex","int","str"],"weight":3,"require":[],"exclusion":[]},
{"name":"Nature's Patience","isunique":"yes","attribute":["dex","int","str"],"weight":3,"require":[],"exclusion":["Duration","Ailment"]},
{"name":"Secrets of Suffering","isunique":"yes","attribute":["dex","int","str"],"weight":3,"require":[],"exclusion":[]},
{"name":"Kineticism","isunique":"yes","attribute":["dex","int","str"],"weight":3,"require":["Ranged","Ailment"],"exclusion":["Caster"]},
{"name":"Veteran's Awareness","isunique":"yes","attribute":["dex","int","str"],"weight":3,"require":[],"exclusion":[]},
{"name":"Hollow Palm Technique","isunique":"yes","attribute":["dex","int","str"],"weight":1,"require":["Barefist"],"exclusion":[]}];
var KEYSTONE_F= [];

var isIncludeMovement=false;
var isIncludeDefense=false;
var isIncludeUnique=false;

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function weightedPick(a) {
	var totalWeight = a.reduce((acc, cur) => acc + cur.weight, 0);
	shuffle(a);
	var r = Math.floor(Math.random() * totalWeight);
	var p = -1;
	a.reduce((acc, cur, idx) => 
	{
		if(cur.weight > acc) {
			if(p==-1) p=idx;
			return acc;
		} else {
			return acc-cur.weight;
		}
	}, r);
	return a[p];
}

function retrieveAllTag(tag, tagList = [], banList = []) {
	// console.log("tag: ", tag, " list: ", tagList, " ban: ", banList);
	var addedTag = tagList.concat(tag);
	// Not already part of the list, nor in the ban list
	// console.log("subtag available : ", tag.subtag);
	var restrainedTags = tag.subtag.filter(s => !banList.find(t => t.name == s)).map(n => TAG.find(t => t.name == n));
	// console.log("subtag remaining : ", restrainedTags);
	var newTag = weightedPick(restrainedTags);
	// console.log("between ", tag.subtag, " we picked ", newTag);
	if(newTag && !tagList.includes(newTag)) {
		// include new exclusion tags
		var subBanList = newTag.exclusion.map(n => TAG.find(t => t.name == n));
		// Recursively find the childs tags
		// console.log("banlist adds ", subBanList, " from ", newTag.exclusion);
		var expandedTag = retrieveAllTag(newTag, addedTag, banList.concat(subBanList));
		// Add them to the list
		addedTag = addedTag.filter(t => !banList.includes(t)).concat(expandedTag.include.filter(t => !addedTag.includes(t)).filter(t => !banList.includes(t)));
		banList = banList.filter(t => !addedTag.includes(t)).concat(expandedTag.exclude.filter(t => !banList.includes(t)).filter(t => !addedTag.includes(t)));
	}
	return {"include": addedTag, "exclude": banList};
}

function buildBuild() {
	// First, choose the class	
	var ascendancy = weightedPick(CLASS_F) //CLASS.find(c => c.name=="Assassin" );
	var mainTag = [TAG.find(t => t.name=="Holder"), TAG.find(t => t.name=="Dealer"), TAG.find(t => t.name=="Taker")]; //weightedPick(TAG_F.filter(t => !ascendancy.exclude.includes(t.name)).filter(t => t.level == 1));
	shuffle(mainTag);
	var gem = null;
	do {
		// Second, choose a tag with the tag pool that comes with it and their exclusions
		var tagPool = mainTag.reduce((acc, cur) => retrieveAllTag(cur, acc.include, acc.exclude), 
			{"include": [], "exclude": ascendancy.exclude.map(n => TAG.find(t => t.name == n))});
		//console.log("tag pool is ", tagPool);
		console.log("shortlisted gemlist " , GEM_F
			// filter tag that are not exclude from ascendancy and in the list
			.filter(g => g.holder.filter(t=> tagPool.include.filter(t => !ascendancy.exclude.includes(t.name)).map(s => s.name).includes(t)).length > 0)
			.filter(g => g.taker.filter(t=> tagPool.include.filter(t => !ascendancy.exclude.includes(t.name)).map(s => s.name).includes(t)).length > 0)
			.filter(g => g.dealer.filter(t=> tagPool.include.filter(t => !ascendancy.exclude.includes(t.name)).map(s => s.name).includes(t)).length > 0), " exclusion is: ", tagPool);
		// Third, choose a gem
		var gem = weightedPick(GEM_F
			// filter tag that are not exclude from ascendancy and in the list
			.filter(g => g.holder.filter(t=> tagPool.include.filter(t => !ascendancy.exclude.includes(t.name)).map(s => s.name).includes(t)).length > 0)
			.filter(g => g.taker.filter(t=> tagPool.include.filter(t => !ascendancy.exclude.includes(t.name)).map(s => s.name).includes(t)).length > 0)
			.filter(g => g.dealer.filter(t=> tagPool.include.filter(t => !ascendancy.exclude.includes(t.name)).map(s => s.name).includes(t)).length > 0)
			// filter tag that are exclude from selected tag
			// .filter(g => g.tag.filter(s => tagPool.exclude.includes(s)) == 0)
			);
	} while(!gem)
		
	// epurate gem tag by keeping only those revelant with chosen tag
	 console.log("tag pool for ", ascendancy.name, "/", mainTag," is ", tagPool, " picked: ", gem);
	var gemTag = tagPool.include;
	// Gem tags cleaning each level of tag
	var tagInfoList = [gemTag.filter(t => t.domain == "Dealer").sort( (a, b) => b.level - a.level).shift(),
		gemTag.filter(t => t.domain == "Taker").sort( (a, b) => b.level - a.level).shift(),
		gemTag.filter(t => t.domain == "Holder").sort( (a, b) => b.level - a.level).shift()];
	 console.log("tagInfoList=",tagInfoList);
	// Fourth, choose a keystone
	/*console.log("require ", tagPool.include, ", excluding ", ascendancy.exclude, " & ", gemTag, " short list is : ", KEYSTONE_F
		.filter(k => k.require.find(t => tagPool.include.map(n => n.name).includes(t)) || k.require.length == 0)
		.filter(k => k.exclusion.filter(t => ascendancy.tag.includes(t)).length == 0)
		.filter(k => k.exclusion.filter(t => gemTag.map(n => n.name).includes(t)).length == 0)
		.filter(k => ascendancy.attribute.find(a => k.attribute.includes(a)))
		.filter(k => k.isunique == "no"));
		*/
	var keystone = weightedPick(KEYSTONE_F
		.filter(k => k.require.find(t => tagPool.include.map(n => n.name).includes(t)) || k.require.length == 0)
		.filter(k => k.exclusion.filter(t => ascendancy.tag.includes(t)).length == 0)
		.filter(k => k.exclusion.filter(t => gemTag.map(n => n.name).includes(t)).length == 0)
		.filter(k => ascendancy.attribute.find(a => k.attribute.includes(a)))
		.filter(k => k.isunique == "no")
		);
	// console.log("picked a=",ascendancy, " g=",gem, " k=", keystone);
	return {"ascendancy": ascendancy, "gem": gem, "keystone": keystone, "style": tagInfoList};
}

function spin() {
	// Filter the list with current parameters
	CLASS_F = CLASS;
	TAG_F = TAG.filter(t => t.level==0);
	KEYSTONE_F = KEYSTONE.filter(k => (!k.isUnique || isIncludeUnique));
	GEM_F = GEM.filter(g => (!g.holder.includes("Defense") || isIncludeDefense) 
		&& (!g.holder.includes("Aura") || isIncludeMovement) 
		&& (!g.holder.includes("Curse") || isIncludeMovement) 
		&& (!g.holder.includes("Movement") || isIncludeMovement) 
		&& (!g.isUnique || isIncludeUnique));

	// Build a build
	for(i = 0; i < 8; i++) {
		var build = buildBuild();

		var tableRef = document.getElementById("resulttable").getElementsByTagName("tbody")[0];
		var tableRow = tableRef.insertRow(0);
		var numCell = tableRow.insertCell(0);
		numCell.appendChild(document.createTextNode((8-i)+"-"));
		var ascendCell = tableRow.insertCell(1);
		ascendCell.appendChild(document.createTextNode(build.ascendancy.name));
		var gemCell = tableRow.insertCell(2);
		gemCell.appendChild(document.createTextNode(build.gem.name)); 
		var styleCell = tableRow.insertCell(3);
		var htmlNode = document.createElement("P");
		htmlNode.innerHTML = build.style.map(t => "<div class=\"tooltip\">"+t.name+"<span class=\"tooltiptext\">"+t.tooltip+"</span></div>").join(" / ");
		styleCell.appendChild(htmlNode); 
		var keysCell = tableRow.insertCell(4);
		keysCell.appendChild(document.createTextNode(build.keystone.name));
		if(tableRef.rows.length > 8) tableRef.deleteRow(-1);
	}
};

function initConf() {
	
}

