var CLASS = [{"name":"Hierophant","attribute":["str","int"],"tag":["Totem","Caster"],"exclude":["Bleed"],"weight":10},
{"name":"Inquisitor","attribute":["str","int"],"tag":["Fire","Cold","Lightning"],"exclude":["Chaos","Corruption"],"weight":10},
{"name":"Guardian","attribute":["str","int"],"tag":["Summoner","Aura"],"exclude":[],"weight":10},
{"name":"Necromancer","attribute":["int"],"tag":["Summoner","Aura","Fire"],"exclude":[],"weight":10},
{"name":"Elementalist","attribute":["int"],"tag":["Fire","Cold","Lightning","Aides"],"exclude":["Bleed","Corruption"],"weight":10},
{"name":"Occultist","attribute":["int"],"tag":["Corruption","Shiver","Curse"],"exclude":[],"weight":10},
{"name":"Saboteur","attribute":["int","dex"],"tag":["Trap","Mine"],"exclude":["Totem"],"weight":10},
{"name":"Assassin","attribute":["int","dex"],"tag":[],"exclude":["Shiver","Corruption","Burning","Summoner"],"weight":10},
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

var TAG=[{"name":"Construct","level":1,"weight":75,"subtag":["Trap","Mine","Totem"],"exclusion":[]},
{"name":"Summoner","level":1,"weight":50,"subtag":["Bodyguard","Aides","Army","Unique"],"exclusion":[]},
{"name":"Duration","level":1,"weight":75,"subtag":["Corruption","Shiver","Burning","Bleed"],"exclusion":["Multi Element","Lightning"]},
{"name":"Melee","level":1,"weight":100,"subtag":["One handed","Dual Wield","Two handed"],"exclusion":["Ranged","Caster"]},
{"name":"Caster","level":1,"weight":100,"subtag":["Type","Multi Element"],"exclusion":["Melee","Ranged"]},
{"name":"Triggered","level":1,"weight":75,"subtag":["Channel","Cast On Crit","Spellslinger","Unique"],"exclusion":[]},
{"name":"Ranged","level":1,"weight":100,"subtag":["Bow","Wand","Shield"],"exclusion":["Melee","Caster"]},
{"name":"Support","level":1,"weight":0,"subtag":["Aura","Curse","Energy Shield","Warcry","Unique"],"exclusion":[]},
{"name":"Trap","level":4,"weight":100,"subtag":["Caster","Bow","Wand"],"exclusion":[]},
{"name":"Mine","level":4,"weight":100,"subtag":["Caster","Bow","Wand"],"exclusion":[]},
{"name":"Totem","level":4,"weight":100,"subtag":["Caster","Bow","Wand"],"exclusion":[]},
{"name":"Bodyguard","level":2,"weight":100,"subtag":["Zombie","Spectre"],"exclusion":[]},
{"name":"Aides","level":2,"weight":100,"subtag":["Golem","Herald"],"exclusion":[]},
{"name":"Army","level":2,"weight":100,"subtag":[],"exclusion":[]},
{"name":"Corruption","level":2,"weight":100,"subtag":["Caster","Bow","Chaos","Ailment"],"exclusion":["Fire","Cold","Physical"]},
{"name":"Shiver","level":2,"weight":100,"subtag":["Caster"],"exclusion":["Fire","Chaos","Physical"]},
{"name":"Burning","level":2,"weight":100,"subtag":["Caster","Melee","Ranged"],"exclusion":["Chaos","Cold","Physical"]},
{"name":"Bleed","level":4,"weight":100,"subtag":["Melee","Ranged"],"exclusion":["Caster","Fire","Cold","Chaos"]},
{"name":"One handed","level":3,"weight":100,"subtag":[],"exclusion":["Bow","Wand","Shield"]},
{"name":"Dual Wield","level":3,"weight":100,"subtag":[],"exclusion":["Bow","Wand","Shield"]},
{"name":"Two handed","level":3,"weight":100,"subtag":[],"exclusion":["Bow","Wand","Shield"]},
{"name":"Conversion","level":2,"weight":100,"subtag":["Type"],"exclusion":["Physical"]},
{"name":"Multi Element","level":4,"weight":50,"subtag":[],"exclusion":[]},
{"name":"Channel","level":3,"weight":100,"subtag":[],"exclusion":[]},
{"name":"Cast On Crit","level":3,"weight":100,"subtag":["Caster"],"exclusion":[]},
{"name":"Spellslinger","level":3,"weight":100,"subtag":["Caster"],"exclusion":["Bow"]},
{"name":"Bow","level":3,"weight":100,"subtag":[],"exclusion":["One handed","Dual Wield","Two handed","Wand","Shield"]},
{"name":"Wand","level":3,"weight":100,"subtag":[],"exclusion":["One handed","Dual Wield","Two handed","Wand","Shield"]},
{"name":"Shield","level":3,"weight":20,"subtag":[],"exclusion":["One handed","Dual Wield","Two handed","Wand","Bow"]},
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
{"name":"Chaos","level":4,"weight":100,"subtag":[],"exclusion":[]},
{"name":"Energy Shield","level":4,"weight":0,"subtag":[],"exclusion":[]},
{"name":"Zombie","level":4,"weight":100,"subtag":[],"exclusion":[]},
{"name":"Spectre","level":4,"weight":100,"subtag":[],"exclusion":[]},
{"name":"Golem","level":4,"weight":100,"subtag":[],"exclusion":[]},
{"name":"Herald","level":4,"weight":100,"subtag":[],"exclusion":[]},
{"name":"Unique","level":1,"weight":0,"subtag":[],"exclusion":[]}];
var TAG_F= [];

var GEM=[{"name":"Animate Weapon","attribute":"dex","tag":["Army"],"isunique":"no","weight":1},
{"name":"Arctic Armour","attribute":"dex","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Artillery Ballista","attribute":"dex","tag":["Bow","Totem"],"isunique":"no","weight":1},
{"name":"Barrage","attribute":"dex","tag":["Bow","Wand"],"isunique":"no","weight":1},
{"name":"Bear Trap","attribute":"dex","tag":["Trap"],"isunique":"no","weight":1},
{"name":"Blade Blast","attribute":"dex","tag":["Caster","Physical"],"isunique":"no","weight":1},
{"name":"Blade Flurry","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Blade Vortex","attribute":"dex","tag":["Caster","Physical"],"isunique":"no","weight":1},
{"name":"Bladefall","attribute":"dex","tag":["Caster","Physical"],"isunique":"no","weight":1},
{"name":"Blast Rain","attribute":"dex","tag":["Bow"],"isunique":"no","weight":1},
{"name":"Blink Arrow","attribute":"dex","tag":["Movement"],"isunique":"no","weight":1},
{"name":"Blood Rage","attribute":"dex","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Burning Arrow","attribute":"dex","tag":["Bow","Burning","Fire"],"isunique":"no","weight":1},
{"name":"Caustic Arrow","attribute":"dex","tag":["Bow","Corruption","Chaos"],"isunique":"no","weight":1},
{"name":"Charged Dash","attribute":"dex","tag":["Melee","Channel"],"isunique":"no","weight":1},
{"name":"Cobra Lash","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Cremation","attribute":"dex","tag":["Caster","Fire"],"isunique":"no","weight":1},
{"name":"Cyclone","attribute":"dex","tag":["Channel","Melee"],"isunique":"no","weight":1},
{"name":"Dash","attribute":"dex","tag":["Movement"],"isunique":"no","weight":1},
{"name":"Desecrate","attribute":"dex","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Detonate Dead","attribute":"dex","tag":["Caster","Fire"],"isunique":"no","weight":1},
{"name":"Double Strike","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Dual Strike","attribute":"dex","tag":["Dual Wield"],"isunique":"no","weight":1},
{"name":"Elemental Hit","attribute":"dex","tag":["One handed","Dual Wield","Two handed","Bow","Wand","Multi Element","Cold","Fire","Lightning"],"isunique":"no","weight":1},
{"name":"Ensnaring Arrow","attribute":"dex","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Ethereal Knives","attribute":"dex","tag":["Caster","Physical"],"isunique":"no","weight":1},
{"name":"Explosive Arrow","attribute":"dex","tag":["Bow","Fire"],"isunique":"no","weight":1},
{"name":"Explosive Trap","attribute":"dex","tag":["Trap"],"isunique":"no","weight":1},
{"name":"Fire Trap","attribute":"dex","tag":["Trap"],"isunique":"no","weight":1},
{"name":"Flamethrower Trap","attribute":"dex","tag":["Trap"],"isunique":"no","weight":1},
{"name":"Flicker Strike","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Frenzy","attribute":"dex","tag":["One handed","Dual Wield","Two handed","Bow","Wand"],"isunique":"no","weight":1},
{"name":"Frost Blades","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Galvanic Arrow","attribute":"dex","tag":["Bow"],"isunique":"no","weight":1},
{"name":"Grace","attribute":"dex","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Haste","attribute":"dex","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Hatred","attribute":"dex","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Herald of Agony","attribute":"dex","tag":["Herald"],"isunique":"no","weight":1},
{"name":"Herald of Ice","attribute":"dex","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Ice Shot","attribute":"dex","tag":["Bow"],"isunique":"no","weight":1},
{"name":"Ice Trap","attribute":"dex","tag":["Trap"],"isunique":"no","weight":1},
{"name":"Lacerate","attribute":"dex","tag":["Melee","Physical"],"isunique":"no","weight":1},
{"name":"Lancing Steel","attribute":"dex","tag":["Melee","Physical"],"isunique":"no","weight":1},
{"name":"Lightning Arrow","attribute":"dex","tag":["Bow"],"isunique":"no","weight":1},
{"name":"Lightning Strike","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Mirror Arrow","attribute":"dex","tag":["Army"],"isunique":"no","weight":1},
{"name":"Pestilent Strike","attribute":"dex","tag":["Melee","Chaos","Ailment"],"isunique":"no","weight":1},
{"name":"Phase Run","attribute":"dex","tag":["Movement"],"isunique":"no","weight":1},
{"name":"Plague Bearer","attribute":"dex","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Poacher's Mark","attribute":"dex","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Precision","attribute":"dex","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Projectile Weakness","attribute":"dex","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Puncture","attribute":"dex","tag":["One handed","Dual Wield","Two handed","Bleed","Bow"],"isunique":"no","weight":1},
{"name":"Purity of Ice","attribute":"dex","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Rain of Arrows","attribute":"dex","tag":["Bow"],"isunique":"no","weight":1},
{"name":"Reave","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Riposte","attribute":"dex","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Scourge Arrow","attribute":"dex","tag":["Bow"],"isunique":"no","weight":1},
{"name":"Seismic Trap","attribute":"dex","tag":["Trap"],"isunique":"no","weight":1},
{"name":"Shattering Steel","attribute":"dex","tag":["Melee","Physical"],"isunique":"no","weight":1},
{"name":"Shrapnel Ballista","attribute":"dex","tag":["Bow","Totem"],"isunique":"no","weight":1},
{"name":"Siege Ballista","attribute":"dex","tag":["Bow"],"isunique":"no","weight":1},
{"name":"Smoke Mine","attribute":"dex","tag":["Movement"],"isunique":"no","weight":1},
{"name":"Spectral Shield Throw","attribute":"dex","tag":["Shield"],"isunique":"no","weight":1},
{"name":"Spectral Throw","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Split Arrow","attribute":"dex","tag":["Bow"],"isunique":"no","weight":1},
{"name":"Summon Ice Golem","attribute":"dex","tag":["Golem"],"isunique":"no","weight":1},
{"name":"Temporal Chains","attribute":"dex","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Tornado Shot","attribute":"dex","tag":["Bow"],"isunique":"no","weight":1},
{"name":"Toxic Rain","attribute":"dex","tag":["Bow","Corruption","Chaos"],"isunique":"no","weight":1},
{"name":"Unearth","attribute":"dex","tag":["Caster","Physical","Army"],"isunique":"no","weight":1},
{"name":"Venom Gyre","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Viper Strike","attribute":"dex","tag":["Melee","Ailment","Chaos"],"isunique":"no","weight":1},
{"name":"Volatile Dead","attribute":"dex","tag":["Caster","Fire"],"isunique":"no","weight":1},
{"name":"Whirling Blades","attribute":"dex","tag":["Movement"],"isunique":"no","weight":1},
{"name":"Wild Strike","attribute":"dex","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Withering Step","attribute":"dex","tag":["Movement"],"isunique":"no","weight":1},
{"name":"Arc","attribute":"int","tag":["Caster","Lightning"],"isunique":"no","weight":1},
{"name":"Arcane Cloak","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Arctic Breath","attribute":"int","tag":["Caster","Shiver","Cold"],"isunique":"no","weight":1},
{"name":"Armageddon Brand","attribute":"int","tag":["Caster","Fire"],"isunique":"no","weight":1},
{"name":"Assassin's Mark","attribute":"int","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Ball Lightning","attribute":"int","tag":["Caster","Lightning"],"isunique":"no","weight":1},
{"name":"Bane","attribute":"int","tag":["Caster","Corruption","Selfcast","Chaos"],"isunique":"no","weight":1},
{"name":"Blight","attribute":"int","tag":["Caster","Corruption","Chaos"],"isunique":"no","weight":1},
{"name":"Bodyswap","attribute":"int","tag":["Caster","Fire"],"isunique":"no","weight":1},
{"name":"Bone Offering","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Brand Recall","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Clarity","attribute":"int","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Cold Snap","attribute":"int","tag":["Caster","Shiver","Cold"],"isunique":"no","weight":1},
{"name":"Conductivity","attribute":"int","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Contagion","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Conversion Trap","attribute":"int","tag":["Army"],"isunique":"no","weight":1},
{"name":"Convocation","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Dark Pact","attribute":"int","tag":["Caster","Chaos"],"isunique":"no","weight":1},
{"name":"Despair","attribute":"int","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Discharge","attribute":"int","tag":["Caster","Multi Element"],"isunique":"no","weight":1},
{"name":"Discipline","attribute":"int","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Divine Ire","attribute":"int","tag":["Caster","Conversion","Lightning","Channel"],"isunique":"no","weight":1},
{"name":"Elemental Weakness","attribute":"int","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Enfeeble","attribute":"int","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Essence Drain","attribute":"int","tag":["Caster","Corruption","Chaos"],"isunique":"no","weight":1},
{"name":"Fireball","attribute":"int","tag":["Caster","Fire"],"isunique":"no","weight":1},
{"name":"Firestorm","attribute":"int","tag":["Caster","Fire"],"isunique":"no","weight":1},
{"name":"Flame Dash","attribute":"int","tag":["Movement"],"isunique":"no","weight":1},
{"name":"Flame Surge","attribute":"int","tag":["Caster","Fire"],"isunique":"no","weight":1},
{"name":"Flameblast","attribute":"int","tag":["Caster","Fire","Channel"],"isunique":"no","weight":1},
{"name":"Flammability","attribute":"int","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Flesh Offering","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Freezing Pulse","attribute":"int","tag":["Caster","Cold"],"isunique":"no","weight":1},
{"name":"Frost Bomb","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Frost Wall","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Frostbite","attribute":"int","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Frostblink","attribute":"int","tag":["Movement"],"isunique":"no","weight":1},
{"name":"Frostbolt","attribute":"int","tag":["Caster","Cold"],"isunique":"no","weight":1},
{"name":"Glacial Cascade","attribute":"int","tag":["Caster","Cold","Conversion"],"isunique":"no","weight":1},
{"name":"Herald of Thunder","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Ice Nova","attribute":"int","tag":["Caster","Cold"],"isunique":"no","weight":1},
{"name":"Ice Spear","attribute":"int","tag":["Caster","Cold"],"isunique":"no","weight":1},
{"name":"Icicle Mine","attribute":"int","tag":["Mine","Caster"],"isunique":"no","weight":1},
{"name":"Incinerate","attribute":"int","tag":["Caster","Fire","Channel"],"isunique":"no","weight":1},
{"name":"Kinetic Blast","attribute":"int","tag":["Wand","Ranged"],"isunique":"no","weight":1},
{"name":"Kinetic Bolt","attribute":"int","tag":["Wand"],"isunique":"no","weight":1},
{"name":"Lightning Spire Trap","attribute":"int","tag":["Trap"],"isunique":"no","weight":1},
{"name":"Lightning Tendrils","attribute":"int","tag":["Caster","Lightning","Channel"],"isunique":"no","weight":1},
{"name":"Lightning Trap","attribute":"int","tag":["Trap"],"isunique":"no","weight":1},
{"name":"Lightning Warp","attribute":"int","tag":["Movement"],"isunique":"no","weight":1},
{"name":"Magma Orb","attribute":"int","tag":["Caster","Fire"],"isunique":"no","weight":1},
{"name":"Malevolence","attribute":"int","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Orb of Storms","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Power Siphon","attribute":"int","tag":["Wand","Ranged"],"isunique":"no","weight":1},
{"name":"Purifying Flame","attribute":"int","tag":["Caster","Fire","Conversion"],"isunique":"no","weight":1},
{"name":"Purity of Elements","attribute":"int","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Purity of Lightning","attribute":"int","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Pyroclast Mine","attribute":"int","tag":["Mine"],"isunique":"no","weight":1},
{"name":"Raise Spectre","attribute":"int","tag":["Spectre"],"isunique":"no","weight":1},
{"name":"Raise Zombie","attribute":"int","tag":["Zombie"],"isunique":"no","weight":1},
{"name":"Righteous Fire","attribute":"int","tag":["Burning","Fire"],"isunique":"no","weight":1},
{"name":"Scorching Ray","attribute":"int","tag":["Caster","Burning","Channel","Fire"],"isunique":"no","weight":1},
{"name":"Shock Nova","attribute":"int","tag":["Caster","Lightning"],"isunique":"no","weight":1},
{"name":"Siphoning Trap","attribute":"int","tag":["Trap"],"isunique":"no","weight":1},
{"name":"Soulrend","attribute":"int","tag":["Caster","Corruption"],"isunique":"no","weight":1},
{"name":"Spark","attribute":"int","tag":["Caster","Lightning"],"isunique":"no","weight":1},
{"name":"Spirit Offering","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Storm Brand","attribute":"int","tag":["Caster","Lightning"],"isunique":"no","weight":1},
{"name":"Storm Burst","attribute":"int","tag":["Caster","Lightning","Conversion","Channel"],"isunique":"no","weight":1},
{"name":"Storm Call","attribute":"int","tag":["Caster","Lightning"],"isunique":"no","weight":1},
{"name":"Stormbind","attribute":"int","tag":["Caster","Lightning","Channel"],"isunique":"no","weight":1},
{"name":"Stormblast Mine","attribute":"int","tag":["Mine"],"isunique":"no","weight":1},
{"name":"Summon Carrion Golem","attribute":"int","tag":["Golem"],"isunique":"no","weight":1},
{"name":"Summon Chaos Golem","attribute":"int","tag":["Golem"],"isunique":"no","weight":1},
{"name":"Summon Holy Relic","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Summon Lightning Golem","attribute":"int","tag":["Golem"],"isunique":"no","weight":1},
{"name":"Summon Raging Spirit","attribute":"int","tag":["Army"],"isunique":"no","weight":1},
{"name":"Summon Skeletons","attribute":"int","tag":["Army"],"isunique":"no","weight":1},
{"name":"Summon Skitterbots","attribute":"int","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Tempest Shield","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Vortex","attribute":"int","tag":["Caster","Shiver","Cold"],"isunique":"no","weight":1},
{"name":"Wave of Conviction","attribute":"int","tag":["Caster","Multi Element"],"isunique":"no","weight":1},
{"name":"Winter Orb","attribute":"int","tag":["Caster","Cold","Channel"],"isunique":"no","weight":1},
{"name":"Wither","attribute":"int","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Wrath","attribute":"int","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Zealotry","attribute":"int","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Abyssal Cry","attribute":"str","tag":["Warcry"],"isunique":"no","weight":1},
{"name":"Ancestral Protector","attribute":"str","tag":["Totem"],"isunique":"no","weight":1},
{"name":"Ancestral Warchief","attribute":"str","tag":["Totem"],"isunique":"no","weight":1},
{"name":"Anger","attribute":"str","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Animate Guardian","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Berserk","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Bladestorm","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Blood and Sand","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Chain Hook","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Cleave","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Consecrated Path","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Decoy Totem","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Determination","attribute":"str","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Devouring Totem","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Dominating Blow","attribute":"str","tag":["Army"],"isunique":"no","weight":1},
{"name":"Dread Banner","attribute":"str","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Earthquake","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Enduring Cry","attribute":"str","tag":["Warcry"],"isunique":"no","weight":1},
{"name":"Flesh and Stone","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Glacial Hammer","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Ground Slam","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Heavy Strike","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Herald of Ash","attribute":"str","tag":["Burning","Fire"],"isunique":"no","weight":1},
{"name":"Herald of Purity","attribute":"str","tag":["Herald"],"isunique":"no","weight":1},
{"name":"Holy Flame Totem","attribute":"str","tag":["Totem"],"isunique":"no","weight":1},
{"name":"Ice Crash","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Immortal Call","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Infernal Blow","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Leap Slam","attribute":"str","tag":["Movement"],"isunique":"no","weight":1},
{"name":"Molten Shell","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Molten Strike","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Perforate","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Pride","attribute":"str","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Punishment","attribute":"str","tag":["Curse"],"isunique":"no","weight":1},
{"name":"Purity of Fire","attribute":"str","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Rallying Cry","attribute":"str","tag":["Warcry"],"isunique":"no","weight":1},
{"name":"Reckoning","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Rejuvenation Totem","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Searing Bond","attribute":"str","tag":["Totem"],"isunique":"no","weight":1},
{"name":"Shield Charge","attribute":"str","tag":["Movement"],"isunique":"no","weight":1},
{"name":"Shockwave Totem","attribute":"str","tag":["Totem"],"isunique":"no","weight":1},
{"name":"Smite","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Static Strike","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Steelskin","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Summon Flame Golem","attribute":"str","tag":["Golem"],"isunique":"no","weight":1},
{"name":"Summon Stone Golem","attribute":"str","tag":["Golem"],"isunique":"no","weight":1},
{"name":"Sunder","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Sweep","attribute":"str","tag":["Two handed"],"isunique":"no","weight":1},
{"name":"Tectonic Slam","attribute":"str","tag":["Melee"],"isunique":"no","weight":1},
{"name":"Vengeance","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Vigilant Strike","attribute":"str","tag":["Defense"],"isunique":"no","weight":1},
{"name":"Vitality","attribute":"str","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Vulnerability","attribute":"str","tag":["Curse"],"isunique":"no","weight":1},
{"name":"War Banner","attribute":"str","tag":["Aura"],"isunique":"no","weight":1},
{"name":"Warlord's Mark","attribute":"str","tag":["Curse"],"isunique":"no","weight":1}];
var GEM_F= [];

var KEYSTONE=[{"name":"-","isunique":"no","attribute":["dex","int","str"],"weight":100,"require":[],"exclusion":[]},
{"name":"Phase Acrobatics","isunique":"no","attribute":["dex","int"],"weight":5,"require":[],"exclusion":[]},
{"name":"Ancestral Bond","isunique":"no","attribute":["int","str"],"weight":5,"require":["Totem"],"exclusion":[]},
{"name":"Avatar of Fire","isunique":"no","attribute":["int","str"],"weight":5,"require":["Conversion"],"exclusion":["Chaos"]},
{"name":"Blood Magic","isunique":"no","attribute":["str"],"weight":2,"require":[],"exclusion":[]},
{"name":"Chaos Inoculation","isunique":"no","attribute":["int","dex"],"weight":3,"require":[],"exclusion":[]},
{"name":"Eldritch Battery","isunique":"no","attribute":["int","dex"],"weight":5,"require":[],"exclusion":[]},
{"name":"Elemental Equilibrium","isunique":"no","attribute":["int","str"],"weight":5,"require":["Duration"],"exclusion":["Corruption","Bleed"]},
{"name":"Elemental Overload","isunique":"no","attribute":["int","str"],"weight":5,"require":["Fire","Cold","Lightning"],"exclusion":[]},
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
{"name":"Secrets of Suffering","isunique":"yes","attribute":["dex","int","str"],"weight":3,"require":["Cold","Lightning","Fire"],"exclusion":[]},
{"name":"Kineticism","isunique":"yes","attribute":["dex","int","str"],"weight":3,"require":["Ranged","Bleed"],"exclusion":["Caster"]},
{"name":"Veteran's Awareness","isunique":"yes","attribute":["dex","int","str"],"weight":3,"require":[],"exclusion":[]},
{"name":"Hollow Palm Technique","isunique":"yes","attribute":["dex","int","str"],"weight":1,"require":["Dual"],"exclusion":[]}];
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
	var restrainedTags = tag.subtag.filter(s => !tagList.find(t => t.exclusion.includes(s.name)) && !banList.find(t => t.exclusion.includes(s.name))).map(n => TAG.find(t => t.name == n));
	// console.log("subtag remaining : ", restrainedTags);
	var newTag = weightedPick(restrainedTags);
	// console.log("between ", tag.subtag, " we picked ", newTag);
	if(newTag && !tagList.includes(newTag)) {
		// include new exclusion tags
		var subBanList = newTag.exclusion.map(n => TAG.find(t => t.name == n));
		// Recursively find the childs tags
		// console.log("banlist adds ", subBanList);
		var expandedTag = retrieveAllTag(newTag, addedTag, banList.concat(subBanList));
		// Add them to the list
		addedTag = addedTag.concat(expandedTag.include.filter(t => !addedTag.includes(t)).filter(t => !banList.includes(t)));
		banList = banList.concat(expandedTag.exclude.filter(t => !banList.includes(t)).filter(t => !addedTag.includes(t)));
	}
	return {"include": addedTag, "exclude": banList};
}

function buildBuild() {
	// First, choose the class
	var ascendancy = weightedPick(CLASS_F);
	var mainTag = weightedPick(TAG_F.filter(t => !ascendancy.exclude.includes(t.name)).filter(t => t.level == 1));
	// Second, choose a tag with the tag pool that comes with it and their exclusions
	var tagPool = retrieveAllTag(mainTag);
	// Third, choose a gem
	var gem = weightedPick(GEM_F
		// filter tag that are not exclude from ascendancy and in the list
		.filter(g => g.tag.filter(t=> tagPool.include.filter(t => !ascendancy.exclude.includes(t.name)).map(s => s.name).includes(t)).length > 0)
		// filter tag that are exclude from selected tag
		// .filter(g => g.tag.filter(s => tagPool.exclude.includes(s)) == 0)
		);
	// epurate gem tag by keeping only those revelant with chosen tag
	var gemTag = gem.tag.filter(g => !tagPool.include.includes(t => t.exclude.includes(g))).map(item => TAG.find(t => t.name == item));
	console.log("tag pool for ", ascendancy.name, "/", mainTag.name," is ", tagPool, " picked: ", gem);
	// Gem tags cleaning each level of tag
	var gemTag1 = weightedPick(gemTag.filter(t => t.level == 1));
	var tagLevel1 = gemTag1 ? gemTag1 : weightedPick(tagPool.include.filter(t => t.level == 1));
	var gemTag2 = weightedPick(gemTag.filter(t => t.level == 2));
	var tagLevel2 = gemTag2 ? gemTag2 : weightedPick(tagPool.include.filter(t => t.level == 2));
	var gemTag3 = weightedPick(gemTag.filter(t => t.level == 3));
	var tagLevel3 = gemTag3 ? gemTag3 : weightedPick(tagPool.include.filter(t => t.level == 3));
	var gemTag4 = weightedPick(gemTag.filter(t => t.level == 4));
	var tagLevel4 = gemTag4 ? gemTag4 : weightedPick(tagPool.include.filter(t => t.level == 4));
	var tagInfoList = [tagLevel1, tagLevel2, tagLevel3, tagLevel4].filter(d => d).map(i => i.name).slice(-2);
	// console.log("tagInfoList=",tagInfoList);
	// Fourth, choose a keystone
	var keystone = weightedPick(KEYSTONE_F
		.filter(k => k.exclusion.filter(t => ascendancy.exclude.includes(t)).length == 0)
		.filter(k => k.exclusion.filter(t => gemTag.includes(t)).length == 0)
		.filter(k => ascendancy.attribute.find(a => k.attribute.includes(a)))
		);
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
	for(i = 0; i < 9; i++) {
		var build = buildBuild();

		var tableRef = document.getElementById("resulttable").getElementsByTagName("tbody")[0];
		var tableRow = tableRef.insertRow(0);
		var numCell = tableRow.insertCell(0);
		numCell.appendChild(document.createTextNode((9-i)+"-"));
		var ascendCell = tableRow.insertCell(1);
		ascendCell.appendChild(document.createTextNode(build.ascendancy));
		var gemCell = tableRow.insertCell(2);
		gemCell.appendChild(document.createTextNode(build.gem)); 
		var styleCell = tableRow.insertCell(3);
		styleCell.appendChild(document.createTextNode(build.style)); 
		var keysCell = tableRow.insertCell(4);
		keysCell.appendChild(document.createTextNode(build.keystone));
		if(tableRef.rows.length > 8) tableRef.deleteRow(-1);
	}
};

function initConf() {
	
}

