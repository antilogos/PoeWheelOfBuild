var CLASS = [{"name":"Hierophant","attribute":["str","int"],"tag":["Totem","Caster"],"exclude":["Bleed"],"weight":10},
{"name":"Inquisitor","attribute":["str","int"],"tag":["Fire","Cold","Lightning"],"exclude":["Chaos","Corruption"],"weight":10},
{"name":"Guardian","attribute":["str","int"],"tag":["Summoner","Aura"],"exclude":[],"weight":10},
{"name":"Necromancer","attribute":["int"],"tag":["Summoner","Aura","Fire"],"exclude":[],"weight":10},
{"name":"Elementalist","attribute":["int"],"tag":["Fire","Cold","Lightning","Aides"],"exclude":["Bleed","Corruption"],"weight":10},
{"name":"Occultist","attribute":["int"],"tag":["Corruption","Shiver","Curse"],"exclude":[],"weight":10},
{"name":"Saboteur","attribute":["int","dex"],"tag":["Trap","Mine"],"exclude":["Totem"],"weight":10},
{"name":"Assassin","attribute":["int","dex"],"tag":[],"exclude":["Shiver","Corruption","Burn","Summoner"],"weight":10},
{"name":"Trickster","attribute":["int","dex"],"tag":["Duration"],"exclude":["Construct"],"weight":10},
{"name":"Raider","attribute":["dex"],"tag":[],"exclude":["Summoner","Caster"],"weight":10},
{"name":"Deadeye","attribute":["dex"],"tag":[],"exclude":[],"weight":10},
{"name":"Pathfinder","attribute":["dex"],"tag":["Mixed"],"exclude":[],"weight":10},
{"name":"Slayer","attribute":["dex","str"],"tag":[],"exclude":["Summoner","Caster"],"weight":10},
{"name":"Champion","attribute":["dex","str"],"tag":[],"exclude":["Caster"],"weight":10},
{"name":"Gladiator","attribute":["dex","str"],"tag":[],"exclude":["Summoner","Caster"],"weight":10},
{"name":"Chieftain","attribute":["str"],"tag":["Totem"],"exclude":["Summoner"],"weight":10},
{"name":"Juggernaut","attribute":["str"],"tag":[],"exclude":["Summoner"],"weight":10},
{"name":"Berserker","attribute":["str"],"tag":[],"exclude":["Summoner","Caster"],"weight":10},
{"name":"Ascendant","attribute":["str","int","dex"],"tag":[],"exclude":[],"weight":12}];
var CLASS_F= [];

var TAG=[{"name":"Construct","level":1,"weight":100,"subtag":["Trap","Mine","Totem"],"exclusion":[]},
{"name":"Summoner","level":3,"weight":100,"subtag":["Bodyguard","Aides","Army","Unique"],"exclusion":[]},
{"name":"Duration","level":1,"weight":100,"subtag":["Corruption","Shiver","Burn","Bleed"],"exclusion":[]},
{"name":"Melee","level":1,"weight":100,"subtag":["One handed","Dual Wield"," Two handed","Type"],"exclusion":[]},
{"name":"Caster","level":1,"weight":100,"subtag":["Pure","Convertion","Mixed"],"exclusion":[]},
{"name":"Triggered","level":1,"weight":100,"subtag":["Channel","Crit","Slinger","Unique","Type"],"exclusion":[]},
{"name":"Ranged","level":1,"weight":100,"subtag":["Bow","Wand","Shield","Weapon","Type"],"exclusion":[]},
{"name":"Support","level":1,"weight":0,"subtag":["Aura","Curse","Mana","Warcry","Unique"],"exclusion":[]},
{"name":"Trap","level":3,"weight":100,"subtag":["Caster"],"exclusion":["Selfcast"]},
{"name":"Mine","level":3,"weight":100,"subtag":["Caster"],"exclusion":["Selfcast"]},
{"name":"Totem","level":3,"weight":100,"subtag":["Caster","Ranged","Melee"],"exclusion":["Shield"]},
{"name":"Bodyguard","level":2,"weight":100,"subtag":["Caster"],"exclusion":["Selfcast"]},
{"name":"Aides","level":2,"weight":100,"subtag":["Caster"],"exclusion":["Selfcast"]},
{"name":"Army","level":2,"weight":100,"subtag":["Caster"],"exclusion":["Selfcast"]},
{"name":"Corruption","level":2,"weight":100,"subtag":["Caster","Bow","Chaos","Ailment"],"exclusion":[]},
{"name":"Shiver","level":2,"weight":100,"subtag":["Cold"],"exclusion":[]},
{"name":"Burn","level":2,"weight":100,"subtag":["Fire","Ailment"],"exclusion":[]},
{"name":"Bleed","level":4,"weight":100,"subtag":["Physical","Ailment"],"exclusion":[]},
{"name":"One handed","level":3,"weight":100,"subtag":[],"exclusion":[]},
{"name":"Dual Wield","level":3,"weight":100,"subtag":[],"exclusion":[]},
{"name":"Two handed","level":3,"weight":100,"subtag":[],"exclusion":[]},
{"name":"Pure","level":2,"weight":100,"subtag":["Type"],"exclusion":[]},
{"name":"Conversion","level":2,"weight":100,"subtag":["Type"],"exclusion":["Physical"]},
{"name":"Mixed","level":2,"weight":80,"subtag":[],"exclusion":[]},
{"name":"Channel","level":3,"weight":100,"subtag":["Type"],"exclusion":[]},
{"name":"Crit","level":3,"weight":100,"subtag":["Caster"],"exclusion":["Selfcast"]},
{"name":"Slinger","level":3,"weight":100,"subtag":["Caster"],"exclusion":["Selfcast"]},
{"name":"Bow","level":3,"weight":100,"subtag":["Type"],"exclusion":[]},
{"name":"Wand","level":3,"weight":100,"subtag":["Type"],"exclusion":[]},
{"name":"Shield","level":3,"weight":20,"subtag":[],"exclusion":[]},
{"name":"Weapon","level":2,"weight":100,"subtag":[],"exclusion":[]},
{"name":"Aura","level":2,"weight":0,"subtag":[],"exclusion":[]},
{"name":"Curse","level":2,"weight":0,"subtag":[],"exclusion":[]},
{"name":"Mana","level":2,"weight":100,"subtag":[],"exclusion":[]},
{"name":"Warcry","level":2,"weight":0,"subtag":[],"exclusion":[]},
{"name":"Type","level":2,"weight":100,"subtag":["Lightning","Fire","Cold","Physical","Chaos"],"exclusion":[]},
{"name":"Ailment","level":3,"weight":100,"subtag":[],"exclusion":[]},
{"name":"Physical","level":4,"weight":100,"subtag":[],"exclusion":[]},
{"name":"Lightning","level":4,"weight":100,"subtag":[],"exclusion":[]},
{"name":"Cold","level":4,"weight":100,"subtag":[],"exclusion":[]},
{"name":"Fire","level":4,"weight":100,"subtag":[],"exclusion":[]},
{"name":"Chaos","level":4,"weight":100,"subtag":[],"exclusion":[]}];
var TAG_F= [];

var GEM=[{"name":"Leap Slam","attribute":"str","tag":["Movement","Melee"],"isunique":"no","weight":1},
{"name":"Sweep","attribute":"str","tag":["Two handed"],"isunique":"no","weight":1},
{"name":"Ground Slam","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Cleave","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Shield Charge","attribute":"str","tag":["Shield"],"isunique":"no","weight":1},
{"name":"Enduring Cry","attribute":"str","tag":["Warcry"],"isunique":"no","weight":1},
{"name":"Immortal Call","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Infernal Blow","attribute":"str","tag":["Melee","Fire"],"isunique":"no","weight":1},
{"name":"Glacial Hammer","attribute":"str","tag":["Melee","Cold"],"isunique":"no","weight":1},
{"name":"Warlord's Mark","attribute":"str","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Punishment","attribute":"str","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Heavy Strike","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Dominating Blow","attribute":"str","tag":["Army"],"isunique":"no","weight":1},
{"name":"Molten Shell","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Vitality","attribute":"str","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Determination","attribute":"str","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Anger","attribute":"str","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Shockwave Totem","attribute":"str","tag":["Totem","Caster","Physical"],"isunique":"no","weight":1},
{"name":"Rejuvenation Totem","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Decoy Totem","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Devouring Totem","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Holy Flame Totem","attribute":"str","tag":["Totem","Caster","Conversion","Fire"],"isunique":"no","weight":1},
{"name":"Searing Bond","attribute":"str","tag":["Totem","Burn"],"isunique":"no","weight":1},
{"name":"Animate Guardian","attribute":"str","tag":["Aides"],"isunique":"no","weight":1},
{"name":"Purity of Fire","attribute":"str","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Molten Strike","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Herald of Ash","attribute":"str","tag":["Burn"],"isunique":"no","weight":1},
{"name":"Herald of Purity","attribute":"str","tag":["Aides"],"isunique":"no","weight":1},
{"name":"Reckoning","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Static Strike","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Vengeance","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Summon Flame Golem","attribute":"str","tag":["Aides"],"isunique":"no","weight":1},
{"name":"Ice Crash","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Rallying Cry","attribute":"str","tag":["Warcry"],"isunique":"no","weight":1},
{"name":"Abyssal Cry","attribute":"str","tag":["Warcry"],"isunique":"no","weight":1},
{"name":"Vigilant Strike","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Summon Stone Golem","attribute":"str","tag":["Aides"],"isunique":"no","weight":1},
{"name":"Earthquake","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Ancestral Protector","attribute":"str","tag":["Totem","Melee"],"isunique":"no","weight":1},
{"name":"Ancestral Warchief","attribute":"str","tag":["Totem","Melee"],"isunique":"no","weight":1},
{"name":"Sunder","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Tectonic Slam","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Vulnerability","attribute":"str","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Consecrated Path","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Smite","attribute":"str","tag":["Melee","Lightning"],"isunique":"no","weight":1},
{"name":"War Banner","attribute":"str","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Dread Banner","attribute":"str","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Steelskin","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Bladestorm","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Blood and Sand","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Berserk","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Perforate","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Chain Hook","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Flesh and Stone","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Pride","attribute":"str","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Charged Dash","attribute":"dex","tag":["Melee","Channel"],"isunique":"no","weight":1},
{"name":"Blade Flurry","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Double Strike","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Lacerate","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Elemental Hit","attribute":"dex","tag":["Melee","Bow","Wand"],"isunique":"no","weight":1},
{"name":"Dual Strike","attribute":"dex","tag":["Dual Wield"],"isunique":"no","weight":1},
{"name":"Whirling Blades","attribute":"dex","tag":["Movement","Melee"],"isunique":"no","weight":1},
{"name":"Frenzy","attribute":"dex","tag":["Melee","Bow","Wand"],"isunique":"no","weight":1},
{"name":"Detonate Dead","attribute":"dex","tag":["Caster","Fire"],"isunique":"no","weight":1},
{"name":"Volatile Dead","attribute":"dex","tag":["Caster","Fire"],"isunique":"no","weight":1},
{"name":"Unearth","attribute":"dex","tag":["Caster","Physical","Army"],"isunique":"no","weight":1},
{"name":"Split Arrow","attribute":"dex","tag":["Bow"],"isunique":"no","weight":1},
{"name":"Caustic Arrow","attribute":"dex","tag":["Bow","Corruption"],"isunique":"no","weight":1},
{"name":"Blood Rage","attribute":"dex","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Flicker Strike","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Viper Strike","attribute":"dex","tag":["Melee","Ailment"],"isunique":"no","weight":1},
{"name":"Phase Run","attribute":"dex","tag":["Movement"],"isunique":"no","weight":1},
{"name":"Explosive Arrow","attribute":"dex","tag":["Bow","Fire"],"isunique":"no","weight":1},
{"name":"Temporal Chains","attribute":"dex","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Projectile Weakness","attribute":"dex","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Rain of Arrows","attribute":"dex","tag":["Bow"],"isunique":"no","weight":1},
{"name":"Lightning Strike","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Puncture","attribute":"dex","tag":["Melee","Bleed","Bow"],"isunique":"no","weight":1},
{"name":"Lightning Arrow","attribute":"dex","tag":["Bow"],"isunique":"no","weight":1},
{"name":"Haste","attribute":"dex","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Grace","attribute":"dex","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Hatred","attribute":"dex","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Burning Arrow","attribute":"dex","tag":["Bow","Burn"],"isunique":"no","weight":1},
{"name":"Bear Trap","attribute":"dex","tag":["Trap","Physical"],"isunique":"no","weight":1},
{"name":"Fire Trap","attribute":"dex","tag":["Trap","Fire","Caster"],"isunique":"no","weight":1},
{"name":"Ethereal Knives","attribute":"dex","tag":["Caster","Physical"],"isunique":"no","weight":1},
{"name":"Ice Shot","attribute":"dex","tag":["Bow"],"isunique":"no","weight":1},
{"name":"Arctic Armour","attribute":"dex","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Cyclone","attribute":"dex","tag":["Channel","Melee"],"isunique":"no","weight":1},
{"name":"Reave","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Smoke Mine","attribute":"dex","tag":["Movement"],"isunique":"no","weight":1},
{"name":"Spectral Shield Throw","attribute":"dex","tag":["Shield"],"isunique":"no","weight":1},
{"name":"Spectral Throw","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Animate Weapon","attribute":"dex","tag":["Army"],"isunique":"no","weight":1},
{"name":"Purity of Ice","attribute":"dex","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Barrage","attribute":"dex","tag":["Bow","Wand"],"isunique":"no","weight":1},
{"name":"Desecrate","attribute":"dex","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Tornado Shot","attribute":"dex","tag":["Bow"],"isunique":"no","weight":1},
{"name":"Herald of Ice","attribute":"dex","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Herald of Agony","attribute":"dex","tag":["Aides"],"isunique":"no","weight":1},
{"name":"Poacher's Mark","attribute":"dex","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Blink Arrow","attribute":"dex","tag":["Movement"],"isunique":"no","weight":1},
{"name":"Mirror Arrow","attribute":"dex","tag":["Aides"],"isunique":"no","weight":1},
{"name":"Riposte","attribute":"dex","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Summon Ice Golem","attribute":"dex","tag":["Aides"],"isunique":"no","weight":1},
{"name":"Frost Blades","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Wild Strike","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Ice Trap","attribute":"dex","tag":["Trap","Cold","Caster"],"isunique":"no","weight":1},
{"name":"Blast Rain","attribute":"dex","tag":["Bow"],"isunique":"no","weight":1},
{"name":"Galvanic Arrow","attribute":"dex","tag":["Bow"],"isunique":"no","weight":1},
{"name":"Bladefall","attribute":"dex","tag":["Caster","Physical"],"isunique":"no","weight":1},
{"name":"Blade Vortex","attribute":"dex","tag":["Caster","Physical"],"isunique":"no","weight":1},
{"name":"Siege Ballista","attribute":"dex","tag":["Bow"],"isunique":"no","weight":1},
{"name":"Cremation","attribute":"dex","tag":["Caster","Fire"],"isunique":"no","weight":1},
{"name":"Explosive Trap","attribute":"dex","tag":["Trap","Conversion","Caster"],"isunique":"no","weight":1},
{"name":"Flamethrower Trap","attribute":"dex","tag":["Trap","Fire","Caster"],"isunique":"no","weight":1},
{"name":"Seismic Trap","attribute":"dex","tag":["Trap","Physical","Caster"],"isunique":"no","weight":1},
{"name":"Scourge Arrow","attribute":"dex","tag":["Bow"],"isunique":"no","weight":1},
{"name":"Toxic Rain","attribute":"dex","tag":["Bow","Corruption"],"isunique":"no","weight":1},
{"name":"Lancing Steel","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Shattering Steel","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Dash","attribute":"dex","tag":["Movement"],"isunique":"no","weight":1},
{"name":"Precision","attribute":"dex","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Cobra Lash","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Withering Step","attribute":"dex","tag":["Movement"],"isunique":"no","weight":1},
{"name":"Plague Bearer","attribute":"dex","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Pestilent Strike","attribute":"dex","tag":["Melee","Corruption"],"isunique":"no","weight":1},
{"name":"Venom Gyre","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Shrapnel Ballista","attribute":"dex","tag":["Bow","Totem"],"isunique":"no","weight":1},
{"name":"Ensnaring Arrow","attribute":"dex","tag":["Bow"],"isunique":"no","weight":1},
{"name":"Artillery Ballista","attribute":"dex","tag":["Bow","Totem"],"isunique":"no","weight":1},
{"name":"Blade Blast","attribute":"dex","tag":["Caster","Physical"],"isunique":"no","weight":1},
{"name":"Fireball","attribute":"int","tag":["Caster","Fire"],"isunique":"no","weight":1},
{"name":"Ice Nova","attribute":"int","tag":["Caster","Cold"],"isunique":"no","weight":1},
{"name":"Cold Snap","attribute":"int","tag":["Shiver"],"isunique":"no","weight":1},
{"name":"Raise Zombie","attribute":"int","tag":["Bodyguard"],"isunique":"no","weight":1},
{"name":"Righteous Fire","attribute":"int","tag":["Burn"],"isunique":"no","weight":1},
{"name":"Discharge","attribute":"int","tag":["Caster","Mixed"],"isunique":"no","weight":1},
{"name":"Spark","attribute":"int","tag":["Caster","Lightning"],"isunique":"no","weight":1},
{"name":"Ice Spear","attribute":"int","tag":["Caster","Cold"],"isunique":"no","weight":1},
{"name":"Raise Spectre","attribute":"int","tag":["Bodyguard"],"isunique":"no","weight":1},
{"name":"Frost Wall","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Freezing Pulse","attribute":"int","tag":["Caster","Cold"],"isunique":"no","weight":1},
{"name":"Shock Nova","attribute":"int","tag":["Caster","Lightning"],"isunique":"no","weight":1},
{"name":"Elemental Weakness","attribute":"int","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Enfeeble","attribute":"int","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Assassin's Mark","attribute":"int","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Despair","attribute":"int","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Lightning Warp","attribute":"int","tag":["Movement"],"isunique":"no","weight":1},
{"name":"Summon Skeletons","attribute":"int","tag":["Army"],"isunique":"no","weight":1},
{"name":"Firestorm","attribute":"int","tag":["Caster","Fire"],"isunique":"no","weight":1},
{"name":"Tempest Shield","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Power Siphon","attribute":"int","tag":["Wand"],"isunique":"no","weight":1},
{"name":"Purity of Elements","attribute":"int","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Discipline","attribute":"int","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Wrath","attribute":"int","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Clarity","attribute":"int","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Icicle Mine","attribute":"int","tag":["Mine","Cold","Caster"],"isunique":"no","weight":1},
{"name":"Conversion Trap","attribute":"int","tag":["Trap","Aides"],"isunique":"no","weight":1},
{"name":"Arctic Breath","attribute":"int","tag":["Shiver"],"isunique":"no","weight":1},
{"name":"Arc","attribute":"int","tag":["Caster","Lightning"],"isunique":"no","weight":1},
{"name":"Flammability","attribute":"int","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Frostbite","attribute":"int","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Conductivity","attribute":"int","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Storm Burst","attribute":"int","tag":["Caster","Lightning","Conversion","Channel"],"isunique":"no","weight":1},
{"name":"Incinerate","attribute":"int","tag":["Caster","Fire","Channel"],"isunique":"no","weight":1},
{"name":"Lightning Trap","attribute":"int","tag":["Trap","Lightning","Caster"],"isunique":"no","weight":1},
{"name":"Purity of Lightning","attribute":"int","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Storm Call","attribute":"int","tag":["Caster","Lightning"],"isunique":"no","weight":1},
{"name":"Flameblast","attribute":"int","tag":["Caster","Fire","Channel"],"isunique":"no","weight":1},
{"name":"Ball Lightning","attribute":"int","tag":["Caster","Lightning"],"isunique":"no","weight":1},
{"name":"Summon Raging Spirit","attribute":"int","tag":["Army"],"isunique":"no","weight":1},
{"name":"Flame Surge","attribute":"int","tag":["Caster","Fire"],"isunique":"no","weight":1},
{"name":"Flesh Offering","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Bone Offering","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Spirit Offering","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Glacial Cascade","attribute":"int","tag":["Caster","Cold","Conversion"],"isunique":"no","weight":1},
{"name":"Convocation","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Pyroclast Mine","attribute":"int","tag":["Mine","Fire","Caster"],"isunique":"no","weight":1},
{"name":"Herald of Thunder","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Lightning Tendrils","attribute":"int","tag":["Caster","Lightning","Channel"],"isunique":"no","weight":1},
{"name":"Kinetic Blast","attribute":"int","tag":["Wand"],"isunique":"no","weight":1},
{"name":"Summon Chaos Golem","attribute":"int","tag":["Aides"],"isunique":"no","weight":1},
{"name":"Summon Lightning Golem","attribute":"int","tag":["Aides"],"isunique":"no","weight":1},
{"name":"Flame Dash","attribute":"int","tag":["Movement"],"isunique":"no","weight":1},
{"name":"Magma Orb","attribute":"int","tag":["Caster","Fire"],"isunique":"no","weight":1},
{"name":"Frost Bomb","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Orb of Storms","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Contagion","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Wither","attribute":"int","tag":["Corruption"],"isunique":"no","weight":1},
{"name":"Blight","attribute":"int","tag":["Corruption"],"isunique":"no","weight":1},
{"name":"Essence Drain","attribute":"int","tag":["Corruption"],"isunique":"no","weight":1},
{"name":"Frostbolt","attribute":"int","tag":["Caster","Cold"],"isunique":"no","weight":1},
{"name":"Vortex","attribute":"int","tag":["Shiver"],"isunique":"no","weight":1},
{"name":"Dark Pact","attribute":"int","tag":["Caster","Chaos"],"isunique":"no","weight":1},
{"name":"Scorching Ray","attribute":"int","tag":["Caster","Burn","Channel"],"isunique":"no","weight":1},
{"name":"Bodyswap","attribute":"int","tag":["Caster","Fire"],"isunique":"no","weight":1},
{"name":"Siphoning Trap","attribute":"int","tag":["Trap","Shiver","Caster"],"isunique":"no","weight":1},
{"name":"Lightning Spire Trap","attribute":"int","tag":["Trap","Lightning","Caster"],"isunique":"no","weight":1},
{"name":"Summon Holy Relic","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Winter Orb","attribute":"int","tag":["Caster","Cold","Channel"],"isunique":"no","weight":1},
{"name":"Storm Brand","attribute":"int","tag":["Caster","Lightning"],"isunique":"no","weight":1},
{"name":"Armageddon Brand","attribute":"int","tag":["Caster","Fire"],"isunique":"no","weight":1},
{"name":"Brand Recall","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Purifying Flame","attribute":"int","tag":["Caster","Fire","Conversion"],"isunique":"no","weight":1},
{"name":"Soulrend","attribute":"int","tag":["Corruption"],"isunique":"no","weight":1},
{"name":"Bane","attribute":"int","tag":["Corruption"],"isunique":"no","weight":1},
{"name":"Wave of Conviction","attribute":"int","tag":["Caster","Mixed"],"isunique":"no","weight":1},
{"name":"Zealotry","attribute":"int","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Divine Ire","attribute":"int","tag":["Caster","Conversion","Lightning","Channel"],"isunique":"no","weight":1},
{"name":"Malevolence","attribute":"int","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Frostblink","attribute":"int","tag":["Movement"],"isunique":"no","weight":1},
{"name":"Summon Carrion Golem","attribute":"int","tag":["Aides"],"isunique":"no","weight":1},
{"name":"Stormblast Mine","attribute":"int","tag":["Mine","Lightning","Caster"],"isunique":"no","weight":1},
{"name":"Summon Skitterbots","attribute":"int","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Arcane Cloak","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Stormbind","attribute":"int","tag":["Caster","Lightning"],"isunique":"no","weight":1},
{"name":"Kinetic Bolt","attribute":"int","tag":["Wand"],"isunique":"no","weight":1}];
var GEM_F= [];

var KEYSTONE=[{"name":"-","isunique":"no","weight":100,"require":[],"exclusion":[]},
{"name":"Phase Acrobatics","isunique":"no","weight":5,"require":["Dex"],"exclusion":[]},
{"name":"Ancestral Bond","isunique":"no","weight":5,"require":["Totem"],"exclusion":[]},
{"name":"Avatar of Fire","isunique":"no","weight":5,"require":["Conversion"],"exclusion":["Chaos"]},
{"name":"Blood Magic","isunique":"no","weight":5,"require":["Str"],"exclusion":[]},
{"name":"Chaos Inoculation","isunique":"no","weight":5,"require":["Int"],"exclusion":[]},
{"name":"Eldritch Battery","isunique":"no","weight":5,"require":[],"exclusion":["Str"]},
{"name":"Elemental Equilibrium","isunique":"no","weight":5,"require":["Duration"],"exclusion":["Corruption","Bleed"]},
{"name":"Elemental Overload","isunique":"no","weight":5,"require":["Fire","Cold","Lightning"],"exclusion":[]},
{"name":"Ghost Reaver","isunique":"no","weight":5,"require":[],"exclusion":["Duration","Ailment"]},
{"name":"Iron Grip","isunique":"no","weight":5,"require":["Ranged"],"exclusion":["Int"]},
{"name":"Mind over Matter","isunique":"no","weight":5,"require":[],"exclusion":["Dex"]},
{"name":"Minion Instability","isunique":"no","weight":5,"require":["Army"],"exclusion":[]},
{"name":"Perfect Agony","isunique":"no","weight":5,"require":["Ailment"],"exclusion":[]},
{"name":"Point Blank","isunique":"no","weight":5,"require":["Ranged"],"exclusion":[]},
{"name":"Resolute Technique","isunique":"no","weight":5,"require":["Melee"],"exclusion":[]},
{"name":"Unwavering Stance","isunique":"no","weight":5,"require":["Str"],"exclusion":[]},
{"name":"Vaal Pact","isunique":"no","weight":5,"require":[],"exclusion":["Duration","Ailment"]},
{"name":"Wicked Ward","isunique":"no","weight":5,"require":["Int"],"exclusion":[]},
{"name":"Divine Flesh","isunique":"yes","weight":2,"require":[],"exclusion":[]},
{"name":"Eternal Youth","isunique":"yes","weight":2,"require":[],"exclusion":[]},
{"name":"Corrupted Soul","isunique":"yes","weight":2,"require":[],"exclusion":[]},
{"name":"Strength of Blood","isunique":"yes","weight":2,"require":[],"exclusion":[]},
{"name":"Tempered by War","isunique":"yes","weight":2,"require":[],"exclusion":[]},
{"name":"Glancing Blows","isunique":"yes","weight":2,"require":[],"exclusion":[]},
{"name":"Wind Dancer","isunique":"yes","weight":2,"require":[],"exclusion":[]},
{"name":"Dance with Death","isunique":"yes","weight":2,"require":[],"exclusion":[]},
{"name":"Second Sight","isunique":"yes","weight":2,"require":["Melee"],"exclusion":[]},
{"name":"The Agnostic","isunique":"yes","weight":2,"require":[],"exclusion":[]},
{"name":"Inner Conviction","isunique":"yes","weight":2,"require":["Caster"],"exclusion":[]},
{"name":"Power of Purpose","isunique":"yes","weight":2,"require":[],"exclusion":[]},
{"name":"Supreme Decadence","isunique":"yes","weight":2,"require":[],"exclusion":[]},
{"name":"Supreme Grandstanding","isunique":"yes","weight":2,"require":[],"exclusion":[]},
{"name":"Supreme Ego","isunique":"yes","weight":2,"require":[],"exclusion":[]},
{"name":"Disciple of Kitava","isunique":"yes","weight":3,"require":[],"exclusion":[]},
{"name":"Lone Messenger","isunique":"yes","weight":3,"require":[],"exclusion":[]},
{"name":"Nature's Patience","isunique":"yes","weight":3,"require":[],"exclusion":["Duration","Ailment"]},
{"name":"Secrets of Suffering","isunique":"yes","weight":3,"require":["Cold","Lightning","Fire"],"exclusion":[]},
{"name":"Kineticism","isunique":"yes","weight":3,"require":["Ranged","Bleed"],"exclusion":["Caster"]},
{"name":"Veteran's Awareness","isunique":"yes","weight":3,"require":[],"exclusion":[]},
{"name":"Hollow Palm Technique","isunique":"yes","weight":1,"require":["Dual Wield"],"exclusion":[]}];
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

function retrieveAllTag(tag, tagList = []) {
	//console.log("tag : ", tag);
	var addedTag = tagList.concat(tag);
	tag.subtag.filter(s => !tagList.find(t => t.exclusion.includes(s.name))).forEach((item, index) => {
		var newTag = TAG.find(t => t.name == item);
		if(newTag && !tagList.includes(newTag)) {
			var expandedTag = retrieveAllTag(newTag, addedTag).filter(t => !addedTag.includes(t));
			addedTag = addedTag.concat(expandedTag);
		}
	});
	return addedTag;
}

function buildBuild() {
	var ascendancy = weightedPick(CLASS_F);
	var mainTag = weightedPick(TAG_F.filter(t => !ascendancy.exclude.includes(t.name)));
	var tagPool = retrieveAllTag(mainTag).filter(t => !ascendancy.exclude.includes(t.name));
	var gem = weightedPick(GEM_F.filter(g => g.tag.filter(t=> tagPool.map(s => s.name).includes(t)).length > 0));
	//console.log("tag pool for ", ascendancy.name, "/", mainTag.name," is ", tagPool, " picked: ", gem);
	var keystone = weightedPick(KEYSTONE_F.filter(k => k.exclusion.filter(t=>ascendancy.exclude.includes(t)).length == 0));
	// Gem tags cleaning each level of tag
	var gemTag1 = weightedPick(gem.tag.map(item => TAG.find(t => t.name == item)).filter(t => t.level == 1));
	var tagLevel1 = gemTag1 ? gemTag1 : weightedPick(tagPool.filter(t => t.level == 1));
	var gemTag2 = weightedPick(gem.tag.map(item => TAG.find(t => t.name == item)).filter(t => t.level == 2));
	var tagLevel2 = gemTag2 ? gemTag2 : weightedPick(tagPool.filter(t => t.level == 2));
	var gemTag3 = weightedPick(gem.tag.map(item => TAG.find(t => t.name == item)).filter(t => t.level == 3));
	var tagLevel3 = gemTag3 ? gemTag3 : weightedPick(tagPool.filter(t => t.level == 3));
	var gemTag4 = weightedPick(gem.tag.map(item => TAG.find(t => t.name == item)).filter(t => t.level == 4));
	var tagLevel4 = gemTag4 ? gemTag4 : weightedPick(tagPool.filter(t => t.level == 4));
	var tagInfoList = [tagLevel1, tagLevel2, tagLevel3, tagLevel4].filter(d => d).map(i => i.name).slice(-2);
	// console.log("tagInfoList=",tagInfoList);
	// console.log("picked a=",ascendancy, " g=",gem, " k=", keystone);
	return {"ascendancy": ascendancy.name, "gem": gem.name, "keystone": keystone.name, "style": tagInfoList.join(" / ")};
}

function spin() {
	// Filter the list with current parameters
	CLASS_F = CLASS;
	TAG_F = TAG.filter(t => t.level==1);
	KEYSTONE_F = KEYSTONE.filter(k => (!k.isUnique || isIncludeUnique));
	GEM_F = GEM.filter(g => (!g.tag.includes("Defense") || isIncludeDefense) 
		&& (!g.tag.includes("Aura") || isIncludeMovement) 
		&& (!g.tag.includes("Curse") || isIncludeMovement) 
		&& (!g.tag.includes("Movement") || isIncludeMovement) 
		&& (!g.isUnique || isIncludeUnique));

	// Build a build
	var build = buildBuild();

	var tableRef = document.getElementById("resulttable").getElementsByTagName("tbody")[0];
	var tableRow = tableRef.insertRow(0);
	var ascendCell = tableRow.insertCell(0);
	ascendCell.appendChild(document.createTextNode(build.ascendancy));
	var gemCell = tableRow.insertCell(1);
	gemCell.appendChild(document.createTextNode(build.gem)); 
	var styleCell = tableRow.insertCell(2);
	styleCell.appendChild(document.createTextNode(build.style)); 
	var keysCell = tableRow.insertCell(3);
	keysCell.appendChild(document.createTextNode(build.keystone));
	if(tableRef.rows.length > 8) tableRef.deleteRow(-1);
};

function initConf() {
	
}

