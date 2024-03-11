public class LuckyStrike {
    private int level;

    public LuckyStrike(int level) {
        this.level = level;
    }

    public int modifyLuckBonus(int luckSpent) {
        return (1 + level) * luckSpent;
    }

    public static void main(String[] args) {
        LuckyStrike luckyStrike = new LuckyStrike(1);
        int luckBonus = luckyStrike.modifyLuckBonus(2); // Example: spending 2 luck points
        System.out.println("Luck bonus with Lucky Strike level 1: " + luckBonus);
    }
}

public class LuckyDefense {
    private int level;

    public LuckyDefense(int level) {
        this.level = level;
    }

    public int modifyLuckBonus(int luckSpent) {
        return (1 + level) * luckSpent;
    }

    public static void main(String[] args) {
        LuckyDefense luckyDefense = new LuckyDefense(1);
        int luckBonus = luckyDefense.modifyLuckBonus(2); // Example: spending 2 luck points
        System.out.println("Luck bonus with Lucky Defense level 1: " + luckBonus);
    }
}

public class LuckySocial {
    private int level;

    public LuckySocial(int level) {
        this.level = level;
    }

    public int modifyLuckBonus(int luckSpent) {
        return (1 + level) * luckSpent;
    }

    public static void main(String[] args) {
        LuckySocial luckySocial = new LuckySocial(1);
        int luckBonus = luckySocial.modifyLuckBonus(2); // Example: spending 2 luck points
        System.out.println("Luck bonus with Lucky Social level 1: " + luckBonus);
    }
}

public class LuckyTinkering {
    private int level;

    public LuckyTinkering(int level) {
        this.level = level;
    }

    public int modifyLuckBonus(int luckSpent) {
        return (1 + level) * luckSpent;
    }

    public static void main(String[] args) {
        LuckyTinkering luckyTinkering = new LuckyTinkering(1);
        int luckBonus = luckyTinkering.modifyLuckBonus(2); // Example: spending 2 luck points
        System.out.println("Luck bonus with Lucky Tinkering level 1: " + luckBonus);
    }
}

public class LuckyLooting {
    private int level;

    public LuckyLooting(int level) {
        this.level = level;
    }

    public int modifyLuckBonus(int luckSpent) {
        return luckSpent * (1 + level);
    }

    public static void main(String[] args) {
        LuckyLooting luckyLooting = new LuckyLooting(1);
        int luckBonus = luckyLooting.modifyLuckBonus(2); // Example: spending 2 luck points
        System.out.println("Luck bonus with Lucky Looting level 1: " + luckBonus);
    }
}
public class PowerStrike {
    private int level;

    public PowerStrike(int level) {
        this.level = level;
    }

    // Method to calculate the cost of power strike
    public int calculateCost() {
        return 5 * level;
    }

    public static void main(String[] args) {
        PowerStrike powerStrike = new PowerStrike(1);
        int cost = powerStrike.calculateCost();
        System.out.println("Cost of Power Strike level 1: " + cost);
    }
}

public class Cleave {
    private int level;

    public Cleave(int level) {
        this.level = level;
    }

    // Method to calculate the cost of cleave
    public int calculateCost() {
        return 15;
    }

    public static void main(String[] args) {
        Cleave cleave = new Cleave(1);
        int cost = cleave.calculateCost();
        System.out.println("Cost of Cleave: " + cost);
    }
}

public class AccurateStrike {
    private int level;

    public AccurateStrike(int level) {
        this.level = level;
    }

    // Method to calculate the cost of accurate strike
    public int calculateCost() {
        return 10 * level;
    }

    public static void main(String[] args) {
        AccurateStrike accurateStrike = new AccurateStrike(1);
        int cost = accurateStrike.calculateCost();
        System.out.println("Cost of Accurate Strike level 1: " + cost);
    }
}

public class TargetedStrike {
    private int level;

    public TargetedStrike(int level) {
        this.level = level;
    }

    // Method to calculate the cost of targeted strike
    public int calculateCost() {
        return 4 * level;
    }

    public static void main(String[] args) {
        TargetedStrike targetedStrike = new TargetedStrike(1);
        int cost = targetedStrike.calculateCost();
        System.out.println("Cost of Targeted Strike level 1: " + cost);
    }
}

public class FormationFighting {
    private int level;

    public FormationFighting(int level) {
        this.level = level;
    }

    // Method to calculate the cost of formation fighting
    public int calculateCost() {
        return 4 * level;
    }

    public static void main(String[] args) {
        FormationFighting formationFighting = new FormationFighting(1);
        int cost = formationFighting.calculateCost();
        System.out.println("Cost of Formation Fighting level 1: " + cost);
    }
}

public class ReceiveCharge {
    private int level;

    public ReceiveCharge(int level) {
        this.level = level;
    }

    // Method to calculate the cost of receive charge
    public int calculateCost() {
        return 5;
    }

    public static void main(String[] args) {
        ReceiveCharge receiveCharge = new ReceiveCharge(1);
        int cost = receiveCharge.calculateCost();
        System.out.println("Cost of Receive Charge: " + cost);
    }
}

public class Aim {
    private int level;

    public Aim(int level) {
        this.level = level;
    }

    // Method to calculate the cost of aim
    public int calculateCost() {
        return 10 * level;
    }

    public static void main(String[] args) {
        Aim aim = new Aim(1);
        int cost = aim.calculateCost();
        System.out.println("Cost of Aim level 1: " + cost);
    }
}

public class Sniper {
    private int level;

    public Sniper(int level) {
        this.level = level;
    }

    // Method to calculate the cost of sniper
    public int calculateCost() {
        return 5 * level;
    }

    public static void main(String[] args) {
        Sniper sniper = new Sniper(1);
        int cost = sniper.calculateCost();
        System.out.println("Cost of Sniper level 1: " + cost);
    }
}

public class PinpointShot {
    private int level;

    public PinpointShot(int level) {
        this.level = level;
    }

    // Method to calculate the cost of pinpoint shot
    public int calculateCost() {
        return 6 * level;
    }

    public static void main(String[] args) {
        PinpointShot pinpointShot = new PinpointShot(1);
        int cost = pinpointShot.calculateCost();
        System.out.println("Cost of Pinpoint Shot level 1: " + cost);
    }
}
public class Hardness {
    private int level;

    public Hardness(int level) {
        this.level = level;
    }

    // Method to calculate the cost of hardness
    public int calculateCost() {
        return 20 * level;
    }

    public static void main(String[] args) {
        Hardness hardness = new Hardness(1);
        int cost = hardness.calculateCost();
        System.out.println("Cost of Hardness level 1: " + cost);
    }
}

public class BulletDodge {
    private int level;

    public BulletDodge(int level) {
        this.level = level;
    }

    // Method to calculate the cost of bullet dodge
    public int calculateCost() {
        return 7 * level;
    }

    public static void main(String[] args) {
        BulletDodge bulletDodge = new BulletDodge(1);
        int cost = bulletDodge.calculateCost();
        System.out.println("Cost of Bullet Dodge level 1: " + cost);
    }
}
public class Language {
    private int level;
    private static final int BASE_COST = 5;

    public Language(int level) {
        this.level = level;
    }

    // Method to calculate the cost of Language
    public int calculateCost() {
        // The first language is free
        if (level == 1) {
            return 0;
        }
        // For additional languages, the cost is 5 points per level
        return BASE_COST * (level - 1);
    }

    public static void main(String[] args) {
        Language language = new Language(3); // Example: Selecting 3 additional languages
        int cost = language.calculateCost();
        System.out.println("Cost of selecting 3 additional languages: " + cost);
    }
}

public class Wealth {
    private int level;
    private static final int BASE_COST = 10;

    public Wealth(int level) {
        this.level = level;
    }

    // Method to calculate the cost of Wealth
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        Wealth wealth = new Wealth(2); // Example: Having Wealth level 2
        int cost = wealth.calculateCost();
        System.out.println("Cost of Wealth level 2: " + cost);
    }
}

public class ResidualIncome {
    private int level;
    private static final int BASE_COST = 1;

    public ResidualIncome(int level) {
        this.level = level;
    }

    // Method to calculate the cost of ResidualIncome
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        ResidualIncome residualIncome = new ResidualIncome(3); // Example: Having Residual Income level 3
        int cost = residualIncome.calculateCost();
        System.out.println("Cost of Residual Income level 3: " + cost);
    }
}
FX Name: Earned Income
Type: Social FX
Cost: 1 point per level
Prerequisites: Charisma 5, Negotiation 5
Description: For each level of Earned income, you earn an additional 1% of your starting money (as modified by Wealth) each week you work a Wealth-appropriate job.

FX Name: Allies/Leadership
Type: Social FX
Cost: 10 points per level, with modifiers
Prerequisites: Charisma 15
Description: You have one or more Allies- a friendly NPC. You may select Allies multiple times, each of which will be different. As a default Ally gives you one Ally. For each level of Allies, your Ally has 10% of your points at each stage.

FX Name: Allies/Leadership
Type: Social FX
Cost: 10 points per level, with modifiers
Prerequisites: Charisma 15
Description: You have one or more Allies- a friendly NPC. You may select Allies multiple times, each of which will be different. As a default Ally gives you one Ally. For each level of Allies, your Ally has 10% of your points at each stage.
public class Connections {
    private int level;
    private static final int BASE_COST = 7;

    public Connections(int level) {
        this.level = level;
    }

    // Method to calculate the cost of Connections
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        Connections connections = new Connections(2); // Example: Having Connections level 2
        int cost = connections.calculateCost();
        System.out.println("Cost of Connections level 2: " + cost);
    }
}

public class Contact {
    private int frequencyOfAppearance;
    private static final int BASE_COST = 2;

    public Contact(int frequencyOfAppearance) {
        this.frequencyOfAppearance = frequencyOfAppearance;
    }

    // Method to calculate the cost of Contact
    public int calculateCost() {
        return BASE_COST * frequencyOfAppearance;
    }

    public static void main(String[] args) {
        Contact contact = new Contact(60); // Example: Contact with 60% frequency of appearance
        int cost = contact.calculateCost();
        System.out.println("Cost of Contact with 60% frequency of appearance: " + cost);
    }
}

public class Hospitality {
    private int frequencyOfAppearance;
    private static final int BASE_COST = 10;

    public Hospitality(int frequencyOfAppearance) {
        this.frequencyOfAppearance = frequencyOfAppearance;
    }

    // Method to calculate the cost of Hospitality
    public int calculateCost() {
        return BASE_COST * frequencyOfAppearance;
    }

    public static void main(String[] args) {
        Hospitality hospitality = new Hospitality(60); // Example: Hospitality with 60% frequency of appearance
        int cost = hospitality.calculateCost();
        System.out.println("Cost of Hospitality with 60% frequency of appearance: " + cost);
    }
}
public class DamageResistance {
    private int level;
    private static final int BASE_COST = 3;

    public DamageResistance(int level) {
        this.level = level;
    }

    // Method to calculate the cost of Damage Resistance
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        DamageResistance resistance = new DamageResistance(2); // Example: Damage Resistance level 2
        int cost = resistance.calculateCost();
        System.out.println("Cost of Damage Resistance level 2: " + cost);
    }
}

public class ClawsTalons {
    private int level;
    private static final int BASE_COST = 5;

    public ClawsTalons(int level) {
        this.level = level;
    }

    // Method to calculate the cost of Claws/Talons
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        ClawsTalons clawsTalons = new ClawsTalons(3); // Example: Claws/Talons level 3
        int cost = clawsTalons.calculateCost();
        System.out.println("Cost of Claws/Talons level 3: " + cost);
    }
}

public class HeatVision {
    private static final int COST = 10;

    // Method to calculate the cost of Heat Vision
    public int calculateCost() {
        return COST;
    }

    public static void main(String[] args) {
        HeatVision heatVision = new HeatVision();
        int cost = heatVision.calculateCost();
        System.out.println("Cost of Heat Vision: " + cost);
    }
}

public class LowLightVision {
    private int level;
    private static final int BASE_COST = 2;

    public LowLightVision(int level) {
        this.level = level;
    }

    // Method to calculate the cost of Low Light Vision
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        LowLightVision lowLightVision = new LowLightVision(3); // Example: Low Light Vision level 3
        int cost = lowLightVision.calculateCost();
        System.out.println("Cost of Low Light Vision level 3: " + cost);
    }
}
public class Fetishism {
    private int level;
    private static final int BASE_COST = 6;

    public Fetishism(int level) {
        this.level = level;
    }

    // Method to calculate the cost of Fetishism
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        Fetishism fetishism = new Fetishism(2); // Example: Fetishism level 2
        int cost = fetishism.calculateCost();
        System.out.println("Cost of Fetishism level 2: " + cost);
    }
}

public class Animism {
    private int level;
    private static final int BASE_COST = 6;

    public Animism(int level) {
        this.level = level;
    }

    // Method to calculate the cost of Animism
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        Animism animism = new Animism(3); // Example: Animism level 3
        int cost = animism.calculateCost();
        System.out.println("Cost of Animism level 3: " + cost);
    }
}

// Similarly, you can create classes for Chthonism, Hermeticism, GoetiaSorcery, CeremonialRitual, DaoismWuxia, InbornTalent, and MadScience

// Example of Chthonism class
public class Chthonism {
    private int level;
    private static final int BASE_COST = 6;

    public Chthonism(int level) {
        this.level = level;
    }

    // Method to calculate the cost of Chthonism
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        Chthonism chthonism = new Chthonism(4); // Example: Chthonism level 4
        int cost = chthonism.calculateCost();
        System.out.println("Cost of Chthonism level 4: " + cost);
    }
}
public class MagicSkill {
    private int level;
    private static final int BASE_COST = 10;

    public MagicSkill(int level) {
        this.level = level;
    }

    // Method to calculate the cost of Magic Skill
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        MagicSkill magicSkill = new MagicSkill(2); // Example: Magic Skill level 2
        int cost = magicSkill.calculateCost();
        System.out.println("Cost of Magic Skill level 2: " + cost);
    }
}

public class CeremonialFocus {
    private int level;
    private static final int BASE_COST = 8;

    public CeremonialFocus(int level) {
        this.level = level;
    }

    // Method to calculate the cost of Ceremonial Focus
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        CeremonialFocus ceremonialFocus = new CeremonialFocus(3); // Example: Ceremonial Focus level 3
        int cost = ceremonialFocus.calculateCost();
        System.out.println("Cost of Ceremonial Focus level 3: " + cost);
    }
}

// Similarly, you can create classes for Draining, SacrificialFocus, and ImprovedCountermagic

// Example of Draining class
public class Draining {
    private int level;
    private static final int BASE_COST = 10;

    public Draining(int level) {
        this.level = level;
    }

    // Method to calculate the cost of Draining
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        Draining draining = new Draining(1); // Example: Draining level 1
        int cost = draining.calculateCost();
        System.out.println("Cost of Draining level 1: " + cost);
    }
}
public class WardingProtection {
    private int level;
    private static final int BASE_COST = 8;

    public WardingProtection(int level) {
        this.level = level;
    }

    // Method to calculate the cost of Warding/Protection
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        WardingProtection wardingProtection = new WardingProtection(2); // Example: Warding/Protection level 2
        int cost = wardingProtection.calculateCost();
        System.out.println("Cost of Warding/Protection level 2: " + cost);
    }
}

public class Conjuration {
    private int level;
    private static final int BASE_COST = 8;

    public Conjuration(int level) {
        this.level = level;
    }

    // Method to calculate the cost of Conjuration
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        Conjuration conjuration = new Conjuration(3); // Example: Conjuration level 3
        int cost = conjuration.calculateCost();
        System.out.println("Cost of Conjuration level 3: " + cost);
    }
}

// Similarly, you can create classes for Divination, Mental, and Evocation

// Example of Divination class
public class Divination {
    private int level;
    private static final int BASE_COST = 7;

    public Divination(int level) {
        this.level = level;
    }

    // Method to calculate the cost of Divination
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        Divination divination = new Divination(2); // Example: Divination level 2
        int cost = divination.calculateCost();
        System.out.println("Cost of Divination level 2: " + cost);
    }
}
public class Illusion {
    private int level;
    private static final int BASE_COST = 7;

    public Illusion(int level) {
        this.level = level;
    }

    // Method to calculate the cost of Illusion
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        Illusion illusion = new Illusion(2); // Example: Illusion level 2
        int cost = illusion.calculateCost();
        System.out.println("Cost of Illusion level 2: " + cost);
    }
}

public class Necromancy {
    private int level;
    private static final int BASE_COST = 15;

    public Necromancy(int level) {
        this.level = level;
    }

    // Method to calculate the cost of Necromancy
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        Necromancy necromancy = new Necromancy(3); // Example: Necromancy level 3
        int cost = necromancy.calculateCost();
        System.out.println("Cost of Necromancy level 3: " + cost);
    }
}

// Similarly, you can create classes for Transmutation, Technological, Natural, Good, Evil, Elemental, and WuxiaMartialArts

// Example of Transmutation class
public class Transmutation {
    private int level;
    private static final int BASE_COST = 11;

    public Transmutation(int level) {
        this.level = level;
    }

    // Method to calculate the cost of Transmutation
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        Transmutation transmutation = new Transmutation(2); // Example: Transmutation level 2
        int cost = transmutation.calculateCost();
        System.out.println("Cost of Transmutation level 2: " + cost);
    }
}
public class MysticSoaking {
    private int level;
    private static final int BASE_COST = 3;

    public MysticSoaking(int level) {
        this.level = level;
    }

    // Method to calculate the cost of MysticSoaking
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        MysticSoaking mysticSoaking = new MysticSoaking(2); // Example: MysticSoaking level 2
        int cost = mysticSoaking.calculateCost();
        System.out.println("Cost of MysticSoaking level 2: " + cost);
    }
}

public class MysticMissile {
    private int level;
    private static final int BASE_COST = 10;

    public MysticMissile(int level) {
        this.level = level;
    }

    // Method to calculate the cost of MysticMissile
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        MysticMissile mysticMissile = new MysticMissile(3); // Example: MysticMissile level 3
        int cost = mysticMissile.calculateCost();
        System.out.println("Cost of MysticMissile level 3: " + cost);
    }
}

public class CureWounds {
    private int level;
    private static final int BASE_COST = 4;

    public CureWounds(int level) {
        this.level = level;
    }

    // Method to calculate the cost of CureWounds
    public int calculateCost() {
        return BASE_COST * level;
    }

    public static void main(String[] args) {
        CureWounds cureWounds = new CureWounds(2); // Example: CureWounds level 2
        int cost = cureWounds.calculateCost();
        System.out.println("Cost of CureWounds level 2: " + cost);
    }
}
