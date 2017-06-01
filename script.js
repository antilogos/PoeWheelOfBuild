var KEYSTONE = ["Acrobatics", "Ancestral Bond", "Avatar of Fire", "Blood Magic", "Chaos Innoculation", "Conduit", "Eldritch Battery", "Elemental Equilibrium", "Elemental Overload", "Ghost Reaver", "Iron Grip", "Iron Reflexes", "Mind Over Matter", "Minion Instability", "Necromantic Aegis", "Pain Attunement", "Point Blank", "Resolute Technique", "Unwavering Stance", "Vaal Pact", "Zealot's Oath"];
var CLASS = ["Templar", "Witch", "Shadow", "Ranger", "Duelist", "Marauder", "Scion"];
var GEM = ["Cleave ", "Dominating Blow ", "Flame Totem ", "Glacial Hammer ", "Ground Slam ", "Heavy Strike ", "Infernal Blow ", "Leap Slam ", "Lightning Strike ", "Molten Shell ", "Molten Strike ", "Searing Bond ", "Shield Charge ", "Shockwave Totem ", "Static Strike ", "Sweep ", "Ancestral Protector", "Ancestral Warchief", "Earthquake", "Ice Crash", "Summon Flame Golem", "Summon Stone Golem", "Sunder", "Vigilant Strike", "Barrage ", "Bear Trap ", "Blink Arrow ", "Burning Arrow ", "Cyclone ", "Desecrate ", "Detonate Dead ", "Double Strike ", "Dual Strike ", "Elemental Hit ", "Ethereal Knives ", "Explosive Arrow ", "Fire Trap ", "Flicker Strike ", "Freeze Mine ", "Frenzy ", "Ice Shot ", "Lightning Arrow ", "Mirror Arrow ", "Lightning Strike", "Puncture ", "Rain of Arrows ", "Reave ", "Spectral Throw ", "Split Arrow ", "Tornado Shot ", "Viper Strike ", "Whirling Blades ", "Animate Weapon", "Blade Flurry", "Blade Vortex", "Bladefall", "Blast Rain", "Caustic Arrow", "Frost Blade", "Ice Trap", "Lacerate", "Shrapnel Shot", "Siege Ballista", "Summon Ice Golem", "Wild Strike", "Arc ", "Arctic Breath ", "Ball Lightning ", "Cold Snap ", "Conversion Trap ", "Discharge ", "Fireball ", "Firestorm ", "Flame Surge ", "Flameblast ", "Freezing Pulse ", "Glacial Cascade ", "Ice Nova ", "Ice Spear ", "Incinerate ", "Kinetic Blast ", "Lightning Tendrils ", "Lightning Trap ", "Lightning Warp ", "Power Siphon ", "Raise Spectre ", "Raise Zombie ", "Righteous Fire ", "Shock Nova ", "Spark ", "Storm Call ", "Summon Raging Spirit ", "Summon Skeletons ", "Blight", "Contagion", "Essence Drain", "Fire Nova Mine", "Flame Dash", "Frost Bomb", "Frostbolt", "Magma Orb", "Orb Of Storms", "Scorching Ray", "Summon Chaos Golem", "Summon Lightning Golem", "Tempest Shield", "Vortex", "Wither"];

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function spin() {
  shuffle(KEYSTONE);
  shuffle(CLASS);
  shuffle(GEM);
  var randomKeystones = KEYSTONE.slice(0, 5);
  var randomClass = CLASS.slice(0, 5);
  var randomGem = GEM.slice(0, 5);
  
  var html = "<table><tr><td>keystone</td><td>Class</td><td>Gem</td></tr><tr><td>"+randomKeystones[0]+"</td><td>"+randomClass[0]+"</td><td>"+randomGem[0]+"</td></tr><tr><td>"+randomKeystones[1]+"</td><td>"+randomClass[1]+"</td><td>"+randomGem[1]+"</td></tr><tr><td>"+randomKeystones[2]+"</td><td>"+randomClass[2]+"</td><td>"+randomGem[2]+"</td></tr><tr><td>"+randomKeystones[3]+"</td><td>"+randomClass[3]+"</td><td>"+randomGem[3]+"</td></tr><tr><td>"+randomKeystones[4]+"</td><td>"+randomClass[4]+"</td><td>"+randomGem[4]+"</td></tr>";
  
  var div = document.getElementById("maindiv");
  div.innerHTML = html;
  
};


