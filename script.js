var CLASS = [{"name":"Hierophant","attribute":["str","int"],"tag":["Totem","Caster"],"exclude":["Ailment"],"weight":10,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/Ascendants/Hierophant.png?scale=1"},
{"name":"Inquisitor","attribute":["str","int"],"tag":[],"exclude":["Corruption"],"weight":10,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/Ascendants/Inquisitor.png?scale=1"},
{"name":"Guardian","attribute":["str","int"],"tag":["Summoner","Aura"],"exclude":[],"weight":10,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/Ascendants/Guardian.png?scale=1"},
{"name":"Necromancer","attribute":["int"],"tag":["Summoner","Aura","Fire"],"exclude":[],"weight":10,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/Ascendants/Necromancer.png?scale=1"},
{"name":"Elementalist","attribute":["int"],"tag":["Golem","Herald"],"exclude":["Ailment","Corruption"],"weight":10,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/Ascendants/Elementalist.png?scale=1"},
{"name":"Occultist","attribute":["int"],"tag":["Corruption","Shiver","Curse"],"exclude":[],"weight":10,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/Ascendants/Occultist.png?scale=1"},
{"name":"Saboteur","attribute":["int","dex"],"tag":["Trap","Mine"],"exclude":["Totem"],"weight":10,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/Ascendants/Saboteur.png?scale=1"},
{"name":"Assassin","attribute":["int","dex"],"tag":[],"exclude":["Duration","Summoner"],"weight":10,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/Ascendants/Assassin.png?scale=1"},
{"name":"Trickster","attribute":["int","dex"],"tag":["Duration"],"exclude":["Construct"],"weight":10,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/Ascendants/Trickster.png?scale=1"},
{"name":"Raider","attribute":["dex"],"tag":[],"exclude":["Summoner","Caster"],"weight":10,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/Ascendants/Raider.png?scale=1"},
{"name":"Deadeye","attribute":["dex"],"tag":[],"exclude":[],"weight":10,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/Ascendants/Deadeye.png?scale=1"},
{"name":"Pathfinder","attribute":["dex"],"tag":["Multi Element"],"exclude":[],"weight":10,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/Ascendants/Pathfinder.png?scale=1"},
{"name":"Slayer","attribute":["dex","str"],"tag":[],"exclude":["Summoner","Caster"],"weight":10,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/Ascendants/Slayer.png?scale=1"},
{"name":"Champion","attribute":["dex","str"],"tag":[],"exclude":["Caster"],"weight":10,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/Ascendants/Champion.png?scale=1"},
{"name":"Gladiator","attribute":["dex","str"],"tag":[],"exclude":["Summoner","Caster"],"weight":10,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/Ascendants/Gladiator.png?scale=1"},
{"name":"Chieftain","attribute":["str"],"tag":["Totem"],"exclude":["Summoner"],"weight":10,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/Ascendants/Chieftain.png?scale=1"},
{"name":"Juggernaut","attribute":["str"],"tag":[],"exclude":["Summoner"],"weight":10,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/Ascendants/Juggernaut.png?scale=1"},
{"name":"Berserker","attribute":["str"],"tag":[],"exclude":["Summoner","Caster"],"weight":10,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/Ascendants/Berserker.png?scale=1"},
{"name":"Ascendant","attribute":["str","int","dex"],"tag":[],"exclude":[],"weight":12,"img":"https://docs.google.com/drawings/d/e/2PACX-1vTuu5gdCdWrirllYCmMIpFLtqsx2GQd-udT3r5Q7p9B5RGcypYyKgnWpPEckiskEDtalGM7QtIj_zwY/pub?w=75&h=75"}];
var CLASS_F= [];

var TAG=[{"name":"Dealer","domain":"Dealer","level":0,"weight":100,"subtag":["Construct","Trigger","Manual"],"exclusion":[],"tooltip":"Broad category of what is dealing the damage"},
{"name":"Construct","domain":"Dealer","level":1,"weight":20,"subtag":["Trap","Mine","Totem"],"exclusion":[],"tooltip":"You have to deal damage by proxy"},
{"name":"Trap","domain":"Dealer","level":2,"weight":6,"subtag":[],"exclusion":["Melee","Summoner","Shield"],"tooltip":"You have to deal damage with Traps"},
{"name":"Mine","domain":"Dealer","level":2,"weight":4,"subtag":[],"exclusion":["Melee","Summoner","Shield"],"tooltip":"You have to deal damage with Mines"},
{"name":"Totem","domain":"Dealer","level":2,"weight":10,"subtag":[],"exclusion":["Shield"],"tooltip":"You have to deal damage with Totems"},
{"name":"Trigger","domain":"Dealer","level":1,"weight":20,"subtag":["Channel","Cast on Crit","Spellslinger","Unique"],"exclusion":["Zombie","Spectre","Golem","Herald"],"tooltip":"You have to deal damage by trigger"},
{"name":"Channel","domain":"Dealer","level":2,"weight":6,"subtag":[],"exclusion":["Ailment","Melee","Shield","Ranged"],"tooltip":"You have to deal damage with Cast while Channeling"},
{"name":"Cast on Crit","domain":"Dealer","level":2,"weight":10,"subtag":[],"exclusion":["Ailment","Melee","Shield","Ranged"],"tooltip":"You have to deal damage with Cast on Crit"},
{"name":"Spellslinger","domain":"Dealer","level":2,"weight":4,"subtag":[],"exclusion":["Melee","Bow","Shield"],"tooltip":"You have to deal damage with Spellslinger"},
{"name":"Manual","domain":"Dealer","level":1,"weight":60,"subtag":["Brand","Self"],"exclusion":[],"tooltip":"You have to deal damage by using manual skills"},
{"name":"Self","domain":"Dealer","level":2,"weight":55,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage by using your skills yourself"},
{"name":"Brand","domain":"Dealer","level":2,"weight":5,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage with Brands"},
{"name":"Holder","domain":"Holder","level":0,"weight":100,"subtag":["Summoner","Melee","Ranged","Caster","Shield"],"exclusion":[],"tooltip":"Broad category of how your dealing damage"},
{"name":"Summoner","domain":"Holder","level":1,"weight":12,"subtag":["Spectre","Zombie","Golem","Herald","Army","Unique"],"exclusion":["Duration"],"tooltip":"You have to deal damage with Minions"},
{"name":"Zombie","domain":"Holder","level":2,"weight":1,"subtag":[],"exclusion":["Construct","Trigger"],"tooltip":"You have to deal damage with Zombies"},
{"name":"Spectre","domain":"Holder","level":2,"weight":3,"subtag":[],"exclusion":["Construct","Trigger"],"tooltip":"You have to deal damage with Spectre"},
{"name":"Golem","domain":"Holder","level":2,"weight":1,"subtag":[],"exclusion":["Construct","Trigger"],"tooltip":"You have to deal damage with Golems"},
{"name":"Herald","domain":"Holder","level":2,"weight":2,"subtag":[],"exclusion":["Construct","Trigger"],"tooltip":"You have to deal damage with Heralds"},
{"name":"Army","domain":"Holder","level":2,"weight":5,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage with temporary Minions"},
{"name":"Melee","domain":"Holder","level":1,"weight":26,"subtag":["One handed","Dual Wield","Two handed","Barefist"],"exclusion":["Trap","Mine","Cast on Crit","Spellslinger","Duration"],"tooltip":"You have to deal damage with a Melee weapon"},
{"name":"One handed","domain":"Holder","level":2,"weight":8,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage with a One handed weapon and Shield"},
{"name":"Dual Wield","domain":"Holder","level":2,"weight":8,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage with two One handed weapon"},
{"name":"Two handed","domain":"Holder","level":2,"weight":10,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage with a Two handed weapon"},
{"name":"Barefist","domain":"Holder","level":2,"weight":0,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage with your bare fist"},
{"name":"Ranged","domain":"Holder","level":1,"weight":26,"subtag":["Bow","Wand"],"exclusion":["Cast on Crit"],"tooltip":"You have to deal damage with a Ranged weapon"},
{"name":"Bow","domain":"Holder","level":2,"weight":16,"subtag":[],"exclusion":["Spellslinger"],"tooltip":"You have to deal damage with a Bow weapon"},
{"name":"Wand","domain":"Holder","level":2,"weight":10,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage with a Wand weapon"},
{"name":"Caster","domain":"Holder","level":1,"weight":32,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage with Spell"},
{"name":"Shield","domain":"Holder","level":1,"weight":4,"subtag":[],"exclusion":["Trap","Mine","Cast on Crit","Spellslinger","Duration"],"tooltip":"You have to deal damage with a Shield weapon"},
{"name":"Taker","domain":"Taker","level":0,"weight":100,"subtag":["Duration","Hit","Support"],"exclusion":[],"tooltip":"Broad category of what damage your are dealing"},
{"name":"Duration","domain":"Taker","level":1,"weight":15,"subtag":["Corruption","Shiver","Burning"],"exclusion":["Melee","Summoner","Shield"],"tooltip":"You have to deal Damage over time"},
{"name":"Corruption","domain":"Taker","level":2,"weight":7,"subtag":[],"exclusion":["Wand"],"tooltip":"You have to deal Chaos Damage over time"},
{"name":"Shiver","domain":"Taker","level":2,"weight":4,"subtag":[],"exclusion":["Ranged"],"tooltip":"You have to deal Cold Damage over time"},
{"name":"Burning","domain":"Taker","level":2,"weight":4,"subtag":[],"exclusion":["Ranged"],"tooltip":"You have to deal Fire Damage over time"},
{"name":"Hit","domain":"Taker","level":1,"weight":85,"subtag":["Pure","Conversion","Multi Element","Mana","Ailment"],"exclusion":[],"tooltip":"You have to deal damage with Hits"},
{"name":"Pure","domain":"Taker","level":2,"weight":30,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage of one type"},
{"name":"Conversion","domain":"Taker","level":2,"weight":30,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage with converted damage"},
{"name":"Multi Element","domain":"Taker","level":2,"weight":15,"subtag":[],"exclusion":[],"tooltip":"You have to deal damage of multiple type"},
{"name":"Mana","domain":"Taker","level":2,"weight":2,"subtag":[],"exclusion":["Construct","Trigger","Melee","Summoner","Shield","Ranged"],"tooltip":"You have to deal damage with Archmage"},
{"name":"Ailment","domain":"Taker","level":2,"weight":8,"subtag":[],"exclusion":["Construct","Trigger"],"tooltip":"You have to deal damage with Ailments from your hits"},
{"name":"Support","domain":"Taker","level":1,"weight":0,"subtag":["Aura","Curse","Defense","Warcry","Unique"],"exclusion":[],"tooltip":"You have to help other doing damage"},
{"name":"Aura","domain":"Taker","level":2,"weight":0,"subtag":[],"exclusion":[],"tooltip":"You have to help other with Aura"},
{"name":"Curse","domain":"Taker","level":2,"weight":0,"subtag":[],"exclusion":[],"tooltip":"You have to help other with Curse"},
{"name":"Defense","domain":"Taker","level":2,"weight":0,"subtag":[],"exclusion":[],"tooltip":"You have to help other in their defense"},
{"name":"Warcry","domain":"Taker","level":2,"weight":0,"subtag":[],"exclusion":[],"tooltip":"You have to help other with Warcry"},
{"name":"Unique","domain":"Unique","level":0,"weight":0,"subtag":[],"exclusion":[],"tooltip":"You have to use a skill from a unique"}];
var TAG_F= [];
	
var GEM=[{"name":"Animate Weapon","attribute":"dex","holder":["Army"],"dealer":["Totem","Trigger","Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/animateweapon.png?scale=1"},
{"name":"Arctic Armour","attribute":"dex","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Iceshield.png?scale=1"},
{"name":"Artillery Ballista","attribute":"dex","holder":["Bow"],"dealer":["Totem"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/MortarTotemSkillIcon.png?scale=1"},
{"name":"Barrage","attribute":"dex","holder":["Ranged"],"dealer":["Dealer"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/barrage.png?scale=1"},
{"name":"Bear Trap","attribute":"dex","holder":["Caster"],"dealer":["Trap"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/beartrap.png?scale=1"},
{"name":"Blade Blast","attribute":"dex","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/BladeBurst.png?scale=1"},
{"name":"Blade Flurry","attribute":"dex","holder":["One handed"],"dealer":["Self","Channel"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/ChargedAttack.png?scale=1"},
{"name":"Blade Vortex","attribute":"dex","holder":["Caster"],"dealer":["Totem","Self","Trigger"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/SpinningEtherealBlades.png?scale=1"},
{"name":"Bladefall","attribute":"dex","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/RainOfBlades.png?scale=1"},
{"name":"Blast Rain","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/BlastRain.png?scale=1"},
{"name":"Blink Arrow","attribute":"dex","holder":["Movement"],"dealer":["Movement"],"taker":["Movement"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/BlinkShot.png?scale=1"},
{"name":"Blood Rage","attribute":"dex","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/bloodrage.png?scale=1"},
{"name":"Burning Arrow","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Conversion","Burning"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/firearrow.png?scale=1"},
{"name":"Caustic Arrow","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Corruption"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/poisonarrow.png?scale=1"},
{"name":"Charged Dash","attribute":"dex","holder":["Melee"],"dealer":["Self","Channel"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/ChargedDash.png?scale=1"},
{"name":"Cobra Lash","attribute":"dex","holder":["One handed"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/CobraLash.png?scale=1"},
{"name":"Cremation","attribute":"dex","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/CorpseEruption.png?scale=1"},
{"name":"Cyclone","attribute":"dex","holder":["Melee"],"dealer":["Self","Channel"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/cyclone.png?scale=1"},
{"name":"Dash","attribute":"dex","holder":["Movement"],"dealer":["Movement"],"taker":["Movement"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/QuickDash.png?scale=1"},
{"name":"Desecrate","attribute":"dex","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Desecrate.png?scale=1"},
{"name":"Detonate Dead","attribute":"dex","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure","Ailment"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconcorpseexplosion.png?scale=1"},
{"name":"Double Strike","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/icondoubleswing.png?scale=1"},
{"name":"Dual Strike","attribute":"dex","holder":["Dual Wield"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/icondualswing.png?scale=1"},
{"name":"Elemental Hit Melee","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Multi Element"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconelementalhit.png?scale=1"},
{"name":"Elemental Hit Bow","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Multi Element"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconelementalhit.png?scale=1"},
{"name":"Elemental Hit Wand","attribute":"dex","holder":["Wand"],"dealer":["Dealer"],"taker":["Multi Element"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconelementalhit.png?scale=1"},
{"name":"Ensnaring Arrow","attribute":"dex","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/EnsnaringArrow.png?scale=1"},
{"name":"Ethereal Knives","attribute":"dex","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/shadowprojectiles.png?scale=1"},
{"name":"Explosive Arrow","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Conversion","Ailment"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/fusearrow.png?scale=1"},
{"name":"Explosive Trap","attribute":"dex","holder":["Caster"],"dealer":["Trap"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/ShrapnelTrap.png?scale=1"},
{"name":"Fire Trap","attribute":"dex","holder":["Caster"],"dealer":["Trap"],"taker":["Burning","Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/groundfire.png?scale=1"},
{"name":"Flamethrower Trap","attribute":"dex","holder":["Caster"],"dealer":["Trap"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/FlamethrowerTrap.png?scale=1"},
{"name":"Flicker Strike","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconblinkstrike.png?scale=1"},
{"name":"Frenzy Melee","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconfrenzy.png?scale=1"},
{"name":"Frenzy Ranged","attribute":"dex","holder":["Ranged"],"dealer":["Dealer"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconfrenzy.png?scale=1"},
{"name":"Frost Blades","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/IceStrike.png?scale=1"},
{"name":"Galvanic Arrow","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/ShrapnelShot.png?scale=1"},
{"name":"Grace","attribute":"dex","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/auraevasion.png?scale=1"},
{"name":"Haste","attribute":"dex","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/auraspeed.png?scale=1"},
{"name":"Hatred","attribute":"dex","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/auracold.png?scale=1"},
{"name":"Herald of Agony","attribute":"dex","holder":["Herald"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/HeraldOfAgony.png?scale=1"},
{"name":"Herald of Ice","attribute":"dex","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/HeraldofIce.png?scale=1"},
{"name":"Ice Shot","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iceshot.png?scale=1"},
{"name":"Ice Trap","attribute":"dex","holder":["Caster"],"dealer":["Trap"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/IceTrapRune.png?scale=1"},
{"name":"Lacerate","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Pure","Ailment"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/BloodLacerate.png?scale=1"},
{"name":"Lancing Steel","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Pure","Ailment"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/LancingSteel.png?scale=1"},
{"name":"Lightning Arrow","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/lightningarrow.png?scale=1"},
{"name":"Lightning Strike","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/lightningslash.png?scale=1"},
{"name":"Mirror Arrow","attribute":"dex","holder":["Army"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/MirrorShot.png?scale=1"},
{"name":"Pestilent Strike","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Conversion","Ailment"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/MambaStrike.png?scale=1"},
{"name":"Phase Run","attribute":"dex","holder":["Movement"],"dealer":["Movement"],"taker":["Movement"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconphaserun.png?scale=1"},
{"name":"Plague Bearer","attribute":"dex","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconplaguebearer.png?scale=1"},
{"name":"Poacher's Mark","attribute":"dex","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/PoachersMark.png?scale=1"},
{"name":"Precision","attribute":"dex","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/auracrit.png?scale=1"},
{"name":"Projectile Weakness","attribute":"dex","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/projectileweakness.png?scale=1"},
{"name":"Puncture Melee","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Pure","Ailment"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/puncture.png?scale=1"},
{"name":"Puncture Bow","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Pure","Ailment"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/puncture.png?scale=1"},
{"name":"Purity of Ice","attribute":"dex","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/auracoldresist.png?scale=1"},
{"name":"Rain of Arrows","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/rainofarrows.png?scale=1"},
{"name":"Reave","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Reave.png?scale=1"},
{"name":"Riposte","attribute":"dex","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Riposte.png?scale=1"},
{"name":"Scourge Arrow","attribute":"dex","holder":["Bow"],"dealer":["Totem","Channel","Self"],"taker":["Conversion","Ailment"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/VirulentArrowSkillIcon.png?scale=1"},
{"name":"Seismic Trap","attribute":"dex","holder":["Caster"],"dealer":["Trap"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/SubterraneanTrap.png?scale=1"},
{"name":"Shattering Steel","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/ShatteringSteel.png?scale=1"},
{"name":"Shrapnel Ballista","attribute":"dex","holder":["Bow"],"dealer":["Totem"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/ShotgunTotemSkillIcon.png?scale=1"},
{"name":"Siege Ballista","attribute":"dex","holder":["Bow"],"dealer":["Totem"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/CrossBowTotem.png?scale=1"},
{"name":"Smoke Mine","attribute":"dex","holder":["Movement"],"dealer":["Movement"],"taker":["Movement"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Smokebomb.png?scale=1"},
{"name":"Spectral Shield Throw","attribute":"dex","holder":["Shield"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/ThrownShield.png?scale=1"},
{"name":"Spectral Throw","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/ghostlythrow.png?scale=1"},
{"name":"Split Arrow","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconsplitarrow.png?scale=1"},
{"name":"Summon Ice Golem","attribute":"dex","holder":["Golem"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/IceElementalSummon.png?scale=1"},
{"name":"Temporal Chains","attribute":"dex","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/temporalchains.png?scale=1"},
{"name":"Tornado Shot","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/TornadoShot.png?scale=1"},
{"name":"Toxic Rain","attribute":"dex","holder":["Bow"],"dealer":["Dealer"],"taker":["Corruption"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/RainOfSpores.png?scale=1"},
{"name":"Unearth","attribute":"dex","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/BoneLance.png?scale=1"},
{"name":"Unearth Archer","attribute":"dex","holder":["Army"],"dealer":["Totem","Channel","Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/BoneLance.png?scale=1"},
{"name":"Venom Gyre","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Conversion","Ailment"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/SnappingAdder.png?scale=1"},
{"name":"Viper Strike","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Conversion","Ailment"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/ViperStrike.png?scale=1"},
{"name":"Volatile Dead","attribute":"dex","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Volitiledead.png?scale=1"},
{"name":"Whirling Blades","attribute":"dex","holder":["Movement"],"dealer":["Movement"],"taker":[],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconbladeflurry.png?scale=1"},
{"name":"Wild Strike","attribute":"dex","holder":["Melee"],"dealer":["Self"],"taker":["Multi Element"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/ElementalStrike.png?scale=1"},
{"name":"Withering Step","attribute":"dex","holder":["Movement"],"dealer":["Movement"],"taker":[],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/WitheringStep.png?scale=1"},
{"name":"Arc","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconarc.png?scale=1"},
{"name":"Arcane Cloak","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":[],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/ArcaneCloak.png?scale=1"},
{"name":"Arctic Breath","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Shiver"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/arcticbreath.png?scale=1"},
{"name":"Armageddon Brand","attribute":"int","holder":["Brand"],"dealer":["Brand"],"taker":["Pure","Ailment"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/ArmageddonBrand.png?scale=1"},
{"name":"Assassin's Mark","attribute":"int","holder":["Curse"],"dealer":["Curse"],"taker":[],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/AssassinsMark.png?scale=1"},
{"name":"Ball Lightning","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/balllightning.png?scale=1"},
{"name":"Bane","attribute":"int","holder":["Caster"],"dealer":["Self"],"taker":["Corruption"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/DarkRitual.png?scale=1"},
{"name":"Blight","attribute":"int","holder":["Caster"],"dealer":["Self","Channel"],"taker":["Corruption"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Blight.png?scale=1"},
{"name":"Bodyswap","attribute":"int","holder":["Movement"],"dealer":["Movement"],"taker":[],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/CorpseWarp.png?scale=1"},
{"name":"Bone Offering","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":[],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/BoneOffering.png?scale=1"},
{"name":"Brand Recall","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":[],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/RecallSigil.png?scale=1"},
{"name":"Clarity","attribute":"int","holder":["Aura"],"dealer":["Aura"],"taker":[],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/auramana.png?scale=1"},
{"name":"Cold Snap","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Shiver"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconcoldsnap.png?scale=1"},
{"name":"Conductivity","attribute":"int","holder":["Curse"],"dealer":["Curse"],"taker":[],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Conductivity.png?scale=1"},
{"name":"Contagion","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Contagion.png?scale=1"},
{"name":"Conversion Trap","attribute":"int","holder":["Army"],"dealer":["Trap"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/conversiontrap.png?scale=1"},
{"name":"Convocation","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Convocation.png?scale=1"},
{"name":"Dark Pact","attribute":"int","holder":["Caster"],"dealer":["Totem","Trigger","Self"],"taker":["Pure","Ailment"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/SkeletalChains.png?scale=1"},
{"name":"Despair","attribute":"int","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Despair.png?scale=1"},
{"name":"Discharge","attribute":"int","holder":["Caster"],"dealer":["Trigger","Self"],"taker":["Multi Element"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/discharge.png?scale=1"},
{"name":"Discipline","attribute":"int","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/auraenergy.png?scale=1"},
{"name":"Divine Ire","attribute":"int","holder":["Caster"],"dealer":["Totem","Channel","Self"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/DivineTempest.png?scale=1"},
{"name":"Elemental Weakness","attribute":"int","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/elementalweakness.png?scale=1"},
{"name":"Enfeeble","attribute":"int","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/enfeeble.png?scale=1"},
{"name":"Essence Drain","attribute":"int","holder":["Caster"],"dealer":["Self"],"taker":["Corruption"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Siphon.png?scale=1"},
{"name":"Fireball","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure","Ailment"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconfireball.png?scale=1"},
{"name":"Firestorm","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/firestorm.png?scale=1"},
{"name":"Flame Dash","attribute":"int","holder":["Movement"],"dealer":["Movement"],"taker":["Movement"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/FlameDash.png?scale=1"},
{"name":"Flame Surge","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/flamewhip.png?scale=1"},
{"name":"Flameblast","attribute":"int","holder":["Caster"],"dealer":["Totem","Channel","Self"],"taker":["Pure","Ailment"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/ChargedBlast.png?scale=1"},
{"name":"Flammability","attribute":"int","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Flammability.png?scale=1"},
{"name":"Flesh Offering","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/FleshOffering.png?scale=1"},
{"name":"Freezing Pulse","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/FreezingPulse.png?scale=1"},
{"name":"Frost Bomb","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/FrostBomb.png?scale=1"},
{"name":"Frost Wall","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/IceWall.png?scale=1"},
{"name":"Frostbite","attribute":"int","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Frostbite.png?scale=1"},
{"name":"Frostblink","attribute":"int","holder":["Movement"],"dealer":["Movement"],"taker":["Movement"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Frostblink.png?scale=1"},
{"name":"Frostbolt","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/FrostBolt.png?scale=1"},
{"name":"Glacial Cascade","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Upheaval.png?scale=1"},
{"name":"Herald of Thunder","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/HeraldofThunder.png?scale=1"},
{"name":"Ice Nova","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconfrostnova.png?scale=1"},
{"name":"Ice Spear","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/IceSpear.png?scale=1"},
{"name":"Icicle Mine","attribute":"int","holder":["Caster"],"dealer":["Mine"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/ColdProjectileMine.png?scale=1"},
{"name":"Incinerate","attribute":"int","holder":["Caster"],"dealer":["Totem","Channel","Self"],"taker":["Pure","Ailment"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/flamethrower.png?scale=1"},
{"name":"Kinetic Blast","attribute":"int","holder":["Wand"],"dealer":["Dealer"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/clusterburst.png?scale=1"},
{"name":"Kinetic Bolt","attribute":"int","holder":["Wand"],"dealer":["Dealer"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/ZigZagWand.png?scale=1"},
{"name":"Lightning Spire Trap","attribute":"int","holder":["Caster"],"dealer":["Trap"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/LightningSpireTrap.png?scale=1"},
{"name":"Lightning Tendrils","attribute":"int","holder":["Caster"],"dealer":["Totem","Channel","Self"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/LightningTouch.png?scale=1"},
{"name":"Lightning Trap","attribute":"int","holder":["Caster"],"dealer":["Trap"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/LightningProjectileTrap.png?scale=1"},
{"name":"Lightning Warp","attribute":"int","holder":["Movement"],"dealer":["Movement"],"taker":["Movement"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/teleportball.png?scale=1"},
{"name":"Magma Orb","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/FireMortar.png?scale=1"},
{"name":"Malevolence","attribute":"int","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/DeliriumAura.png?scale=1"},
{"name":"Orb of Storms","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/StormCloud.png?scale=1"},
{"name":"Power Siphon","attribute":"int","holder":["Wand"],"dealer":["Dealer"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/soulsyphon.png?scale=1"},
{"name":"Purifying Flame","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/PurifyingFlame.png?scale=1"},
{"name":"Purity of Elements","attribute":"int","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/auraresist.png?scale=1"},
{"name":"Purity of Lightning","attribute":"int","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/auralightningresist.png?scale=1"},
{"name":"Pyroclast Mine","attribute":"int","holder":["Caster"],"dealer":["Mine"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/FireMortarBarrageMine.png?scale=1"},
{"name":"Raise Spectre","attribute":"int","holder":["Spectre"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconraisespecter.png?scale=1"},
{"name":"Raise Zombie","attribute":"int","holder":["Zombie"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconraisezombie.png?scale=1"},
{"name":"Righteous Fire","attribute":"int","holder":["Caster"],"dealer":["Self","Totem"],"taker":["Burning"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/righteousfire.png?scale=1"},
{"name":"Scorching Ray","attribute":"int","holder":["Caster"],"dealer":["Totem","Channel","Self"],"taker":["Burning"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/FireBeam.png?scale=1"},
{"name":"Shock Nova","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/ShockNova.png?scale=1"},
{"name":"Siphoning Trap","attribute":"int","holder":["Caster"],"dealer":["Trap"],"taker":["Shiver"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/IceSiphon.png?scale=1"},
{"name":"Soulrend","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Corruption"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Soulrend.png?scale=1"},
{"name":"Spark","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/spark.png?scale=1"},
{"name":"Spirit Offering","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/SpiritOffering.png?scale=1"},
{"name":"Storm Brand","attribute":"int","holder":["Caster"],"dealer":["Brand"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/ConduitSigil.png?scale=1"},
{"name":"Storm Burst","attribute":"int","holder":["Caster"],"dealer":["Totem","Channel","Self"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/StormBurst.png?scale=1"},
{"name":"Storm Call","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/stormcall.png?scale=1"},
{"name":"Stormbind","attribute":"int","holder":["Caster"],"dealer":["Totem","Channel","Self"],"taker":["Mana"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/StormbindRune.png?scale=1"},
{"name":"Stormblast Mine","attribute":"int","holder":["Caster"],"dealer":["Mine"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/LightningExplosionMine.png?scale=1"},
{"name":"Summon Carrion Golem","attribute":"int","holder":["Golem"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/SummonCarrionGolem.png?scale=1"},
{"name":"Summon Chaos Golem","attribute":"int","holder":["Golem"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/ChaosElementalSummon.png?scale=1"},
{"name":"Summon Holy Relic","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/HolyRelicSkillIcon.png?scale=1"},
{"name":"Summon Lightning Golem","attribute":"int","holder":["Golem"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/LightningGolem.png?scale=1"},
{"name":"Summon Raging Spirit","attribute":"int","holder":["Army"],"dealer":["Self","Trigger"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/SummonElemental.png?scale=1"},
{"name":"Summon Skeletons","attribute":"int","holder":["Army"],"dealer":["Self","Trigger"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconraiseskeleton.png?scale=1"},
{"name":"Summon Skitterbots","attribute":"int","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/LightningFireSkitterbots.png?scale=1"},
{"name":"Tempest Shield","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/lightningshield.png?scale=1"},
{"name":"Vortex","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Shiver"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/FrostVortex.png?scale=1"},
{"name":"Wave of Conviction","attribute":"int","holder":["Caster"],"dealer":["Dealer"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Purge.png?scale=1"},
{"name":"Winter Orb","attribute":"int","holder":["Caster"],"dealer":["Totem","Channel","Self"],"taker":["Pure"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/FrostFury.png?scale=1"},
{"name":"Wither","attribute":"int","holder":["Defense"],"dealer":["Defense"],"taker":[],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Wither.png?scale=1"},
{"name":"Wrath","attribute":"int","holder":["Aura"],"dealer":["Aura"],"taker":[],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/auralightning.png?scale=1"},
{"name":"Zealotry","attribute":"int","holder":["Aura"],"dealer":["Aura"],"taker":[],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/SpellDamageAura.png?scale=1"},
{"name":"Abyssal Cry","attribute":"str","holder":["Warcry"],"dealer":["Warcry"],"taker":["Warcry"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconabyssalcry.png?scale=1"},
{"name":"Ancestral Protector","attribute":"str","holder":["Melee"],"dealer":["Totem"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/AncestorTotemSkill.png?scale=1"},
{"name":"Ancestral Warchief","attribute":"str","holder":["Melee"],"dealer":["Totem"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/SlamAncestorTotem.png?scale=1"},
{"name":"Anger","attribute":"str","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/aurafire.png?scale=1"},
{"name":"Animate Guardian","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/animatearmour.png?scale=1"},
{"name":"Berserk","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Berserk.png?scale=1"},
{"name":"Bladestorm","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/BloodBladeStorm.png?scale=1"},
{"name":"Blood and Sand","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/SandStance.png?scale=1"},
{"name":"Chain Hook","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/ChainStrike.png?scale=1"},
{"name":"Cleave","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconcleave.png?scale=1"},
{"name":"Consecrated Path","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/HolyPath.png?scale=1"},
{"name":"Decoy Totem","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/taunttotem.png?scale=1"},
{"name":"Determination","attribute":"str","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/auraarmour.png?scale=1"},
{"name":"Devouring Totem","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/devouringtotem.png?scale=1"},
{"name":"Dominating Blow","attribute":"str","holder":["Army"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/conversionstrike.png?scale=1"},
{"name":"Dread Banner","attribute":"str","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/DreadBanner.png?scale=1"},
{"name":"Earthquake","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/QuakeSlam.png?scale=1"},
{"name":"Enduring Cry","attribute":"str","holder":["Warcry"],"dealer":["Warcry"],"taker":["Warcry"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconeendurancecry.png?scale=1"},
{"name":"Flesh and Stone","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/SandArmour.png?scale=1"},
{"name":"Glacial Hammer","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/icehammer.png?scale=1"},
{"name":"Ground Slam","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/icongroundslam.png?scale=1"},
{"name":"Heavy Strike","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/heavystrike.png?scale=1"},
{"name":"Herald of Ash","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/HeraldofAsh.png?scale=1"},
{"name":"Herald of Purity","attribute":"str","holder":["Herald"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/HeraldOfLight.png?scale=1"},
{"name":"Holy Flame Totem","attribute":"str","holder":["Caster"],"dealer":["Totem"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/flametotem.png?scale=1"},
{"name":"Ice Crash","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/IceCrash.png?scale=1"},
{"name":"Immortal Call","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/immortalcall.png?scale=1"},
{"name":"Infernal Blow","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconinnerfire.png?scale=1"},
{"name":"Leap Slam","attribute":"str","holder":["Movement"],"dealer":["Movement"],"taker":["Movement"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconleapslam.png?scale=1"},
{"name":"Molten Shell","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/moltenshield.png?scale=1"},
{"name":"Molten Strike","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/MoltenStrike.png?scale=1"},
{"name":"Perforate","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Bloodspears.png?scale=1"},
{"name":"Pride","attribute":"str","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/auradamage.png?scale=1"},
{"name":"Punishment","attribute":"str","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/punishment.png?scale=1"},
{"name":"Purity of Fire","attribute":"str","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/aurafireresist.png?scale=1"},
{"name":"Rallying Cry","attribute":"str","holder":["Warcry"],"dealer":["Warcry"],"taker":["Warcry"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/InspiringCry.png?scale=1"},
{"name":"Reckoning","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Repulse.png?scale=1"},
{"name":"Rejuvenation Totem","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/liferegentotem.png?scale=1"},
{"name":"Searing Bond","attribute":"str","holder":["Caster"],"dealer":["Totem"],"taker":["Burning"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/SearingBond.png?scale=1"},
{"name":"Shield Charge","attribute":"str","holder":["Movement"],"dealer":["Movement"],"taker":["Movement"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/iconshieldcharge.png?scale=1"},
{"name":"Shockwave Totem","attribute":"str","holder":["Caster"],"dealer":["Totem"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/earthquaketotem.png?scale=1"},
{"name":"Smite","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Smite.png?scale=1"},
{"name":"Static Strike","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/StaticStrikeSkillIcon.png?scale=1"},
{"name":"Steelskin","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/QuickGuard.png?scale=1"},
{"name":"Summon Flame Golem","attribute":"str","holder":["Golem"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/FireElementalSummon.png?scale=1"},
{"name":"Summon Stone Golem","attribute":"str","holder":["Golem"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/RockGolemSummon.png?scale=1"},
{"name":"Sunder","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/ShockwaveSlam.png?scale=1"},
{"name":"Sweep","attribute":"str","holder":["Two handed"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/sweep.png?scale=1"},
{"name":"Tectonic Slam","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Conversion"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/TectonicSlam.png?scale=1"},
{"name":"Vengeance","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Vengeance.png?scale=1"},
{"name":"Vigilant Strike","attribute":"str","holder":["Defense"],"dealer":["Defense"],"taker":["Defense"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/VigilantStrike.png?scale=1"},
{"name":"Vitality","attribute":"str","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/auraregen.png?scale=1"},
{"name":"Vulnerability","attribute":"str","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/vulnerability.png?scale=1"},
{"name":"War Banner","attribute":"str","holder":["Aura"],"dealer":["Aura"],"taker":["Aura"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/WarBanner.png?scale=1"},
{"name":"Warlord's Mark","attribute":"str","holder":["Curse"],"dealer":["Curse"],"taker":["Curse"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/WarlordsMark.png?scale=1"},
{"name":"Shockwave Support","attribute":"str","holder":["Melee"],"dealer":["Self"],"taker":["Hit"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/BuffIcons/Shockwave.png?scale=1"},
{"name":"Decay Support","attribute":"int","holder":["Melee","Caster"],"dealer":["Manual"],"taker":["Corruption"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/BuffIcons/Decay.png?scale=1"},
{"name":"Infernal Legion Support","attribute":"int","holder":["Summoner"],"dealer":["Self"],"taker":["Burning"],"isunique":"no","weight":1,"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/Ignite.png?scale=1"}];
var GEM_F= [];

var KEYSTONE=[{"name":"-","isunique":"no","attribute":["dex","int","str"],"weight":100,"require":[],"exclusion":[],"img":""},
{"name":"Phase Acrobatics","isunique":"no","attribute":["dex","int"],"weight":5,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/KeystonePhaseAcrobatics.png"},
{"name":"Ancestral Bond","isunique":"no","attribute":["int","str"],"weight":20,"require":["Totem"],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/totemmax.png"},
{"name":"Avatar of Fire","isunique":"no","attribute":["int","str"],"weight":10,"require":["Conversion"],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/KeystoneAvatarOfFire.png"},
{"name":"Blood Magic","isunique":"no","attribute":["str"],"weight":5,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/KeystoneBloodMagic.png"},
{"name":"Chaos Inoculation","isunique":"no","attribute":["int"],"weight":5,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/KeystoneChaosInoculation.png"},
{"name":"Eldritch Battery","isunique":"no","attribute":["int","dex"],"weight":10,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/KeystoneEldritchBattery.png"},
{"name":"Elemental Equilibrium","isunique":"no","attribute":["int","str"],"weight":10,"require":["Duration","Multi Element"],"exclusion":["Corruption","Ailment"],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/KeystoneElementalEquilibrium.png"},
{"name":"Elemental Overload","isunique":"no","attribute":["int","str"],"weight":20,"require":["Multi Element","Pure","Conversion","Burning","Shiver"],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/KeystoneElementalOverload.png"},
{"name":"Ghost Reaver","isunique":"no","attribute":["int","dex"],"weight":15,"require":[],"exclusion":["Duration","Ailment"],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/ghostreaver.png"},
{"name":"Iron Grip","isunique":"no","attribute":["dex","str"],"weight":50,"require":["Ranged"],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/KeystoneIronGrip.png"},
{"name":"Mind over Matter","isunique":"no","attribute":["int"],"weight":50,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/heroicspirit.png"},
{"name":"Minion Instability","isunique":"no","attribute":["int"],"weight":15,"require":["Army"],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/KeystoneMinionInstability.png"},
{"name":"Perfect Agony","isunique":"no","attribute":["int","dex"],"weight":20,"require":["Ailment"],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/CritAilments.png"},
{"name":"Point Blank","isunique":"no","attribute":["dex","str"],"weight":50,"require":["Ranged"],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/KeystonePointBlankArcher.png"},
{"name":"Resolute Technique","isunique":"no","attribute":["str"],"weight":25,"require":["Melee"],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/BrandKeystone.png"},
{"name":"Unwavering Stance","isunique":"no","attribute":["str"],"weight":25,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/KeystoneUnwaveringStance.png"},
{"name":"Vaal Pact","isunique":"no","attribute":["dex","str"],"weight":25,"require":[],"exclusion":["Duration","Ailment"],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/vaalpact.png"},
{"name":"Wicked Ward","isunique":"no","attribute":["int"],"weight":20,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/Occultist/EldrichBarrier.png?scale=1"},
{"name":"Zealot's Oath","isunique":"no","attribute":["Int"],"weight":25,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/liferegentoenergyshield.png"},
{"name":"Divine Flesh","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/DivineFlesh.png"},
{"name":"Eternal Youth","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/EternalYouth.png"},
{"name":"Corrupted Soul","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/CorruptedDefences.png"},
{"name":"Strength of Blood","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/StrengthOfBlood.png"},
{"name":"Tempered by War","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/TemperedByWar.png"},
{"name":"Glancing Blows","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/GlancingBlows.png"},
{"name":"Wind Dancer","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/WindDancer.png"},
{"name":"Dance with Death","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/SharpandBrittle.png"},
{"name":"Second Sight","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":["Melee"],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/TheBlindMonk.png"},
{"name":"The Agnostic","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/MiracleMaker.png"},
{"name":"Inner Conviction","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":["Caster"],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/InnerConviction.png"},
{"name":"Power of Purpose","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/PowerOfPurpose.png"},
{"name":"Supreme Decadence","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/SupremeDecadence.png"},
{"name":"Supreme Grandstanding","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/SupremeGrandstand.png"},
{"name":"Supreme Ego","isunique":"yes","attribute":["dex","int","str"],"weight":2,"require":[],"exclusion":[],"img":"https://web.poecdn.com/image/Art/2DArt/SkillIcons/passives/SupremeEgo.png"},
{"name":"Disciple of Kitava","isunique":"yes","attribute":["dex","int","str"],"weight":3,"require":[],"exclusion":[],"img":"https://web.poecdn.com/public/news/2020-03-10/passives/DiscipleOfKitava.png"},
{"name":"Lone Messenger","isunique":"yes","attribute":["dex","int","str"],"weight":3,"require":[],"exclusion":[],"img":"https://web.poecdn.com/public/news/2020-03-10/passives/LoneMessenger.png"},
{"name":"Nature's Patience","isunique":"yes","attribute":["dex","int","str"],"weight":3,"require":[],"exclusion":["Duration","Ailment"],"img":"https://web.poecdn.com/public/news/2020-03-10/passives/NaturesPatience.png"},
{"name":"Secrets of Suffering","isunique":"yes","attribute":["dex","int","str"],"weight":3,"require":[],"exclusion":[],"img":"https://web.poecdn.com/public/news/2020-03-10/passives/SecretOfAgony.png"},
{"name":"Kineticism","isunique":"yes","attribute":["dex","int","str"],"weight":3,"require":["Ranged","Ailment"],"exclusion":["Caster"],"img":"https://web.poecdn.com/public/news/2020-03-10/passives/Kineticism.png"},
{"name":"Veteran's Awareness","isunique":"yes","attribute":["dex","int","str"],"weight":3,"require":[],"exclusion":[],"img":"https://web.poecdn.com/public/news/2020-03-10/passives/VeteransAwareness.png"},
{"name":"Hollow Palm Technique","isunique":"yes","attribute":["dex","int","str"],"weight":1,"require":["Barefist"],"exclusion":[],"img":"https://web.poecdn.com/public/news/2020-03-10/passives/DragonStyle.png"}];
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
		/*
		console.log("shortlisted gemlist " , GEM_F
			// filter tag that are not exclude from ascendancy and in the list
			.filter(g => g.holder.filter(t=> tagPool.include.filter(p => !ascendancy.exclude.includes(p.name)).map(s => s.name).includes(t)).length > 0)
			.filter(g => g.taker.filter(t=> tagPool.include.filter(p => !ascendancy.exclude.includes(p.name)).map(s => s.name).includes(t)).length > 0)
			.filter(g => g.dealer.filter(t=> tagPool.include.filter(p => !ascendancy.exclude.includes(p.name)).map(s => s.name).includes(t)).length > 0), " exclusion is: ", tagPool);
		*/
		// Third, choose a gem
		var gem = weightedPick(GEM_F
			// filter tag that are not exclude from ascendancy and in the list
			.filter(g => g.holder.filter(t=> tagPool.include.filter(p => !ascendancy.exclude.includes(p.name)).map(s => s.name).includes(t)).length > 0)
			.filter(g => g.taker.filter(t=> tagPool.include.filter(p => !ascendancy.exclude.includes(p.name)).map(s => s.name).includes(t)).length > 0)
			.filter(g => g.dealer.filter(t=> tagPool.include.filter(p => !ascendancy.exclude.includes(p.name)).map(s => s.name).includes(t)).length > 0)
			// filter tag that are exclude from selected tag
			// .filter(g => g.tag.filter(s => tagPool.exclude.includes(s)) == 0)
			);
	} while(!gem)
		
	// epurate gem tag by keeping only those revelant with chosen tag
	// console.log("tag pool for ", ascendancy.name, "/", mainTag," is ", tagPool, " picked: ", gem);
	var gemTag = tagPool.include;
	// Gem tags cleaning each level of tag
	var tagInfoList = [gemTag.filter(t => t.domain == "Dealer").sort( (a, b) => b.level - a.level).shift(),
		gemTag.filter(t => t.domain == "Taker").sort( (a, b) => b.level - a.level).shift(),
		gemTag.filter(t => t.domain == "Holder").sort( (a, b) => b.level - a.level).shift()];
	// console.log("tagInfoList=",tagInfoList);
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
		if(build.ascendancy.img) {
		var ascImg = document.createElement("IMG");
			ascImg.setAttribute("src", build.ascendancy.img);
			ascImg.setAttribute("width", "64px");
			ascImg.setAttribute("height", "64px");
			ascendCell.appendChild(ascImg);
		}
		ascendCell.appendChild(document.createTextNode(build.ascendancy.name));
		var gemCell = tableRow.insertCell(2);
		if(build.gem.img) {
		var gemImg = document.createElement("IMG");
			gemImg.setAttribute("src", build.gem.img);
			gemImg.setAttribute("width", "64px");
			gemImg.setAttribute("height", "64px");
			gemCell.appendChild(gemImg);
		}
		gemCell.appendChild(document.createTextNode(build.gem.name)); 
		var styleCell = tableRow.insertCell(3);
		var htmlNode = document.createElement("P");
		htmlNode.innerHTML = build.style.map(t => "<div class=\"tooltip\">"+t.name+"<span class=\"tooltiptext\">"+t.tooltip+"</span></div>").join(" / ");
		styleCell.appendChild(htmlNode); 
		var keysCell = tableRow.insertCell(4);
		if(build.keystone.img) {
		var keyImg = document.createElement("IMG");
			keyImg.setAttribute("src", build.keystone.img);
			keyImg.setAttribute("width", "64px");
			keyImg.setAttribute("height", "64px");
			keysCell.appendChild(keyImg);
		}
		keysCell.appendChild(document.createTextNode(build.keystone.name));
		if(tableRef.rows.length > 8) tableRef.deleteRow(-1);
	}
};

function initConf() {
	
}

function getDistribution() {
	// Build tzero level
	var tzero = TAG.filter(t => t.level == 0);
	var distributionMap = [{"tags":[], "dist":100, "exclude":[], "nextTag":[]}];
	var safeguard = 10;
	// For all tzero level, add one after the other to build distribution tree
	for(i=0; i< tzero.length; i++) {
		// console.log("iteration of tzero n°", i+1);
		distributionMap = distributionMap.flatMap(curr => [{"tags":curr.tags, "dist":curr.dist, "exclude":curr.exclude, "nextTag": tzero.filter(t => !curr.exclude.find(e => e == t.name))}]);
		// console.log("while loop begin with ", distributionMap);
		do {
			// While nextTag available, recursively build distribution tree for one tzero
			console.log("enter while with ", distributionMap);
			distributionMap = distributionMap.flatMap(curr => {
				if(curr.nextTag && curr.nextTag.length > 0) {
					var totalWeight = curr.nextTag.map(t => t.weight).reduce((a,b) => a+b, 0);
					return curr.nextTag.map(next => [{"tags": curr.tags.concat(next), "dist": totalWeight == 0 ? 0 : curr.dist*next.weight/totalWeight, "exclude":curr.exclude.concat(next.exclusion).concat(next.name), "nextTag":next.subtag.filter(s => !curr.exclude.includes(s)).map(n => TAG.find(t => t.name == n))}]);
				}
				else return [[curr]];
			}).flat();
			// console.log("nextStep = ", distributionMap);
		} while(distributionMap.find(d => d.nextTag.length > 0) && safeguard-- > 0);
		// console.log("while loop finished with ", distributionMap);
	}
	// Associate all possible gem to all possible tag distribution
	distributionMap = distributionMap.flatMap(curr => [{"tags":curr.tags, "dist":curr.dist, "exclude":curr.exclude, "nextTag": GEM
			.filter(g => g.holder.filter(t=> curr.tags.map(s => s.name).includes(t)).length > 0)
			.filter(g => g.taker.filter(t=> curr.tags.map(s => s.name).includes(t)).length > 0)
			.filter(g => g.dealer.filter(t=> curr.tags.map(s => s.name).includes(t)).length > 0)}]);
	// Run the nextTag on the gem 
	distributionMap = distributionMap.flatMap(curr => {
		if(curr.nextTag && curr.nextTag.length > 0) {
			var totalWeight = curr.nextTag.map(t => t.weight).reduce((a,b) => a+b, 0);
			return curr.nextTag.map(next => [{"tags": curr.tags, "dist": totalWeight == 0 ? 0 : curr.dist*next.weight/totalWeight, "exclude":curr.exclude, "nextTag":[], "gem": next.name}]);
		}
		else return [[curr]];
	}).flat();
	// Reduce the distribution map to group by gem name
	var gemDistribution = distributionMap.reduce((curr, next) => curr.set(next.gem, curr.get(next.gem) + next.dist), new Map(GEM.map(g => [g.name, 0])));
	return gemDistribution;
}
