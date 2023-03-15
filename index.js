// ==UserScript==
// @name Florr Mod
// @namespace Tampermonkey Scripts
// @match https://florr.io/
// @grant none
// @version 1.0
// @author lexiyvv & ppip
// @description 3/5/2023, 3:51:44 PM
// ==/UserScript==
var map = new Map();
var mul = 80;
var mul2=80;
var img1=document.createElement("img");
//img1.src="https://cdn.luogu.com.cn/upload/image_hosting/nrnzl833.png";
img1.src="https://cdn.luogu.com.cn/upload/image_hosting/dqyqb2v9.png";
var img2=document.createElement("img");
img2.src="https://cdn.luogu.com.cn/upload/image_hosting/epn2iq5e.png";
function toChinese(x){
    if(x=='vvyixel')return 'lexiyvv';
    if(x=='qqwq')return 'ppip';
//----------- Start
	if(x==='florr.io')return 'florr.io';
	else if(x==='Ready')return '开始';
	else if(x==='Connecting...')return '正在连接...';
	else if(x==='Logging in...')return '正在登录...';
	else if(x==='Loading...')return '加载中...';
	else if(x==='Inventory')return '物品';
	else if(x==='Drag a petal to equip it')return '把花瓣拖到物品栏上来装备它';
	else if(x==='Stack')return '             堆叠同种花瓣';
//----------- Petals
	else if(x==='Air')return '空气';
	else if(x==='Antennae')return '触角';
	else if(x==='Basic')return '基本';
	else if(x==='Basil')return '罗勒';
	else if(x==='Bone')return '骨头';
	else if(x==='Bubble')return '泡泡';
	else if(x==='Bulb')return '灯';
	else if(x==='Cactus')return '仙人掌';
	else if(x==='Carrot')return '萝卜';
	else if(x==='Claw')return '爪子';
	else if(x==='Clover')return '幸运草';
	else if(x==='Corn')return '玉米';
	else if(x==='Cotton')return '棉花';
	else if(x==='Cutter')return '齿轮';
	else if(x==='Dahlia')return '大丽花';
	else if(x==='Dandelion')return '蒲公英';
	else if(x==='Egg')return '蛋';
	else if(x==='Egg')return '蛋';
	else if(x==='Fangs')return '牙';
	else if(x==='Faster')return '速';
	else if(x==='Grapes')return '葡萄';
	else if(x==='Heavy')return '重';
	else if(x==='Honey')return '蜂蜜';
	else if(x==='Iris')return '鸢尾';
	else if(x==='Jelly')return '果冻';
	else if(x==='Leaf')return '叶子';
	else if(x==='Light')return '光';
	else if(x==='Lightning')return '电';
	else if(x==='Lotus')return '莲花';
	else if(x==='Magnet')return '磁铁';
	else if(x==='Missile')return '导弹';
	else if(x==='Orange')return '橘子';
	else if(x==='Pearl')return '珍珠';
	else if(x==='Peas')return '豌豆';
	else if(x==='Pincer')return '钳子';
	else if(x==='Plank')return '木板';
	else if(x==='Pollen')return '花粉';
	else if(x==='Poo')return '垃圾';
	else if(x==='Powder')return '粉末';
	else if(x==='Relic')return '遗物';
	else if(x==='Rice')return '米';
	else if(x==='Rock')return '石头';
	else if(x==='Rose')return '玫瑰';
	else if(x==='Sand')return '沙';
	else if(x==='Salt')return '盐';
	else if(x==='Shell')return '贝壳';
	else if(x==='Soil')return '土';
	else if(x==='Sponge')return '海绵';
	else if(x==='Square')return '方块';
	else if(x==='Starfish')return '海星';
	else if(x==='Stick')return '树枝';
	else if(x==='Stinger')return '刺';
	else if(x==='Uranium')return '铀';
	else if(x==='Web')return '网';
	else if(x==='Wing')return '翅膀';
	else if(x==='Yggdrasil')return '世界树之叶';
	else if(x==='Yin Yang')return '阴阳';
	else if(x==='Yucca')return '丝兰';
//----------- skills
    else if(x==='Skills')return '技能';
    else if(x==='SP')return '    技能点';
    else if(x==='Salvaging')return '回收           ';
    else if(x==='Skilled Crafting')return '合成概率               ';
    else if(x==='Crafting')return '合成能力';
    else if(x==='Loadout')return '卡槽         ';
    else if(x==='Reload')return '花瓣CD';
    else if(x==='Petal Rotation')return '转速                     ';
    else if(x==='Health')return '生命值 ';
    else if(x==='Medic')return '回复    ';
    else if(x==='Summoner')return '召唤物血量';
    else if(x==='Sharp Edges')return '体伤                ';
    else if(x==='Petals destroyed during crafting will be absorbed for 1% of their XP.')return '合成中消耗的花瓣会被吸收1%的经验。                                                              ';
    else if(x==='Increases the absorbed XP from petals destroyed during crafting from 1% to 2%.')return '将合成中消耗花瓣被吸收经验的比例从1%提升到2%。                                                            ';
    else if(x==='Increases the absorbed XP from petals destroyed during crafting from 2% to 3%.')return '将合成中消耗花瓣被吸收经验的比例从2%提升到3%。                                                            ';
    else if(x==='Increases the absorbed XP from petals destroyed during crafting from 3% to 4%.')return '将合成中消耗花瓣被吸收经验的比例从3%提升到4%。                                                            ';
    else if(x==='Increases the absorbed XP from petals destroyed during crafting from 4% to 5%.')return '将合成中消耗花瓣被吸收经验的比例从4%提升到5%。                                                            ';
//----------- Descriptions
	else if(x==='Beetle Egg')return '甲虫蛋';
	else if(x==='Ant Egg')return '蚂蚁蛋';
	else if(x==="It's literally nothing.")return '什么都没有，垫格子用。 ';
	else if(x==='Allows your flower to sense foes farther away. Does not stack.')return '允许花朵看到远方的生物和掉落的花瓣。此花瓣的效果不能堆叠。   ';
	else if(x==='A nice petal, not too strong but not too weak.')return '一个还行的花瓣，不是很强，也不是很弱。        ';
	else if(x==='Damage: ')return '伤害：     ';
	else if(x==='Health: ')return '血量：  ';	else if(x=='You were destroyed by:')return '你被这个生物打败了：';
	else if(x=='A mysterious entity')return '未知生物';
	else if(x=='Continue')return '继续（复活）';
	else if(x=='GAME OVER')return '游戏结束';
	else if(x=='Press [ENTER] or click here to chat')return '按 [ENTER] 或点这里来发送消息';
	else if(x=='Adds a temporary shield to yourself or allies.')return '给自己和其他玩家增加护盾。（玩家的护盾值随时间减少）';
	else if(x=='Shield: ')return '护盾';
	else if(x=='Physics are for the weak.')return '物 理 学 圣 剑（不同等级泡泡推进效果相同）';
	else if(x=='This thing is so heavy that nothing gets in the way.')return '这个花瓣能推动生物。';
	else if(x=='Slows down petal rotation speed when equipped.')return '当被装备且加载完成时减慢转速。';
	else if(x=='Increases all healing received.')return '增加个人所有回血效果，护盾除外。';
	else if(x=='Healing bonus: ')return '回血加成：';
	else if(x=='Sturdy.')return '该花瓣每次收到的伤害被减去它的防御力。';
	else if(x=='Armor: ')return '防御：';
	else if(x=='Light Bulb')return '灯泡';
	else if(x=='A shiny lightbulb. Draws aggro from mobs.')return '吸引范围内敌对和中立生物。';
	else if(x=='Radius: ')return '半径：';
	else if(x=='Sturdy and reliable. Can be shot and bounces off walls.')return '发射后能在墙壁上反弹。';
	else if(x=='Deals extra damage if the victim is above 80% health.')return '当被攻击生物血量>80%时造成额外伤害。';
	else if(x=='-50% damage vs other flowers.')return '对其他玩家伤害-50%。';
	else if(x=='Extra Damage: ')return '额外伤害：';
	else if(x=='Increases your luck. Does not stack with itself.')return '增加幸运值，单人不堆叠，多人上限为4.0幸运值。';
	else if(x=='Higher luck increases the chances of finding rarer mobs.')return '增加地图刷怪等级，最多到青。';
	else if(x=='Luck: ')return '幸运值：';
	else if(x=='Its interesting properties inhibits healing effects on affected units.')return '减少被攻击生物的回血效果。';
	else if(x=='Affected units have their healing reduced by 20%. Stacks with itself.')return '被攻击生物回血效果减少20%，可堆叠。';
	else if(x=='Duration: ')return '时长：';
	else if(x==' seconds')return ' 秒';
	else if(x=='A small amount of heal but fairly consistent.')return '回血量小，但是有三份，cd短。';
	else if(x=='Heal: ')return '单份回血：';
	else if(x=="A friend used to own this... now it's time for revenge.")return '一个朋友曾经拥有这个，该为它报仇了。';
	else if(x=='Increases body damage. Does not stack.')return '增加玩家体伤，不叠加。';
	else if(x=='Body Damage: ')return '体伤';
	else if(x=='Absorbs damage taken by the flower.')return '吸收玩家受到的伤害。（效果不明）';
	else if(x=='Takes a long time to spawn, but has a lot of health.')return 'cd很长，但血量很高。';
	else if(x=='Beetle Egg')return '甲虫蛋';
	else if(x=='Something interesting might pop out of this.')return '生成一只（或一些）生物。';
	else if(x=='Contents: ')return '生成物：';
	else if(x=='Ant Egg')return '蚂蚁蛋';
	else if(x=='Heals based on damage dealt by this petal.')return '将该花瓣造成的伤害用来回血。';
	else if(x=='Damage Healed: ')return '回血率';
	else if(x=="It's so light it makes your other petals spin faster.")return '增加花瓣转速。';
	else if(x=='Rotation Speed:')return '转速：';
	else if(x=='4 in 1 deal. Now with a secret ingredient: poison.')return '分为四片，造成伤害和毒伤，毒伤不可叠加，整个打出按一份算。';
	else if(x=='Poison: ')return '毒伤：';
	else if(x=='Weaker than most petals, but recharges very quickly.')return '比大部分花瓣弱（伤害，血量），但是cd短。';
	else if(x=='Gathers energy from the sun to heal your flower passively.')return '持续回血，cd中可以回血。';
	else if(x=='Can be eaten by friendly mobs to heal.')return '可以帮助除了digger和玩家的其他友方生物回血。';
	else if(x=='Mob Heal: ')return '回血（对生物）：';
	else if(x=='No one likes touching this.')return '弹飞其他生物。';
	else if(x=='Knockback: ')return '击退：';
	else if(x=='Very poisonous, but takes a little while to do its work.')return '造成毒伤，毒伤不可叠加。';
	else if(x=='Mobs love this. Attracts them in a large radius.')return '吸引范围内生物，丢出使用。';
	else if(x=='Mobs will prioritize this over flowers.')return '生物优先追逐这个花瓣。';
	else if(x=='Affected units develop immunity to its effects after some time.')return '被影响的生物一段时间后效果解除。';
	else if(x=='Max Mob Rarity: ')return '能吸引的最高生物等级：';
	else if(x=='Strikes several nearby enemies.')return '连击相邻的生物，不能被发射物触发。';
	else if(x=='Lightning: ')return '伤害：';
	else if(x=='Bounces:')return '连击数：';
	else if(x=='Absorbs poison damage taken by the flower.')return '吸收玩家受到的毒伤。';
	else if(x=='Increases drop pickup range.')return '增加捡起掉落物的范围。';
	else if(x=='Does not stack with itself.')return '不堆叠。';
	else if(x=='Pickup range: ')return '范围：';
	else if(x=='You can actually shoot this one.')return '你可以把这个花瓣发射出去。';
	else if(x=='A sweet citrus fruit.')return '范围更大，分为3份';
	else if(x=='Makes mobs less likely to want to attack you. Does not stack.')return '减少生物发现你的范围。';
	else if(x=='Mob aggro range: ')return '范围减少：';
	else if(x=='Asthmatics beware.')return '当心哮喘。';
	else if(x=='Debilitates enemies temporarily, reducing their movement speed.')return '短时间减少被攻击生物速度。';
	else if(x=='4 in 1 deal.')return '分为4份，整体打出算一份。';
	else if(x=="Just drop it off somewhere and use your kinetic powers so you don't lose it.")return '可以被丢出并拖着走。';
	else if(x=='Mysterious Relic')return '神秘的遗物';
	else if(x=='A strange relic. Damage taken is spread among other wearers.')return '佩戴遗物的玩家共享部分伤害。';
	else if(x=='% distributed: ')return '分摊的伤害：';
	else if(x=='Spawns instantly, but not very strong.')return '一帧（20/s）生成一次。';
	else if(x=='Extremely durable, but takes a bit longer to recharge.')return '很耐用，但cd也长。';
	else if(x=='Its healing properties are amazing. Not so good at combat though.')return '回血效果极强。';
	else if(x=='A bunch of sand particles.')return '4份沙粒。';
	else if(x=="It's really sticky.")return '减少碰到的怪物的速度。';
	else if(x=="It really hurts, but it's very fragile.")return '很脆，但是伤害很高。';
	else if(x=='Spreads damage taken by the flower over a period of time.')return '把玩家一次性受到的伤害分摊到一段时间内。';
	else if(x=='If destroyed, deals remaining damage all at once.')return '如果被打破了，储存的伤害瞬间给出。';
	else if(x=='Period: ')return '分摊时长：';
	else if(x=='Increases health, but also increases flower size and decreases movement speed.')return '增加生命上限，花朵大小，减慢速度。';
	else if(x=='Flower Health: ')return '增加生命上限：';
	else if(x=='It comes and goes.')return '大范围来回移动。';
	else if(x=='This mysterious petal affects the rotation of your petals in unpredictable ways.')return '以特殊方式改变花瓣转动方式。';
	else if(x=='Heals your flower but only while in the defensive position.')return '只在防守形态时回血。';
	else if(x=='Not very strong, but somehow increases your maximum health.')return '增加生命上限。';
	else if(x=='Does 5x damage vs projectiles and petals.')return '对花瓣和发射物造成5倍伤害。';
	else if(x=='Mysterious Powder')return '神秘的粉末';
	else if(x=='Increases movement speed. Does not stack.')return '增加移动速度，不叠加。';
	else if(x=='Movement Speed: ')return '速度：';
	else if(x=='Reflects some of the damage you take back to the enemy that dealt it.')return '反伤：';
	else if(x=='Reflected damage is reduced by 75% against flowers.')return '对玩家效果-75%。';
	else if(x=='Damage Reflection: ')return '反伤率：';
	else if(x=='Mysterious Stick')return '神秘的木棍';
	else if(x=='A mysterious stick that summons the forces of the wind.')return '召唤沙尘暴。';
	else if(x=='Spawn: ')return '召唤：';
	else if(x=='Increases health regen while below 75% health.')return '当玩家生命值小于75%时回血。';
	else if(x=='Periodically releases radiation in a large radius.')return '范围毒伤，不可叠加。';
	else if(x=='Causes even the most passive mobs to become very aggressive.')return '使所有生物变为敌对。';
	else if(x=='Stronger the closer the victim is to the source.')return '效果随距离的减少而增加。';
	else if(x=='-75% damage versus other flowers.')return '对其他玩家伤害-75%。';
	else if(x=='A dried leaf from the Yggdrasil tree.')return '世界树上掉落的枯叶子。';
	else if(x=='Rumored to be able to bring the fallen back to life.')return '能救活死亡的玩家。';
	else if(x=='Revive Heal: ')return '复活时血量：';
	else if(x==='')return '';
	else if(x==='')return '';
	else if(x==='')return '';
	else if(x==='')return '';
	else if(x==='')return '';
	else if(x==='')return '';
	else if(x==='')return '';
	else if(x==='')return '';
	else if(x==='')return '';
	else if(x==='')return '';
	else if(x==='')return '';
	else if(x==='')return '';
	else if(x==='')return '';
	else if(x==='')return '';
	else if(x==='')return '';
	else if(x==='')return '';
	else if(x==='')return '';
	else if(x==='')return '';
//----------- Effects
	else if(x==='Extra vision: ')return '额外视野：    ';
	else if(x==='')return '';
	else if(x==='')return '';
	else if(x==='')return '';
	else if(x==='')return '';
	else if(x==='')return '';
	else return x;
}
var scWidth=document.body.offsetWidth;
for (const {prototype} of [OffscreenCanvasRenderingContext2D,CanvasRenderingContext2D]){
    if(prototype.rarc===undefined){
        prototype.rarc=prototype.arc;
        prototype.rfillText=prototype.fillText;
        prototype.rstrokeText=prototype.strokeText;
    }
	prototype.arc = function (x, y, r,a,b){
		if(r===120&&x===0&&y===-5){
			y=y+5;
      //      console.log(a/35.81371150016785);
            var progress=Math.sqrt(a/35.81371150016785);
			this.drawImage(img2,x-mul2/2+15,y-mul/2+11.25,(mul2-30)/2*progress,5);
			this.drawImage(img2,x+mul2/2-15,y-mul/2+11.25,-(mul2-30)/2*progress,5);
			this.drawImage(img2,x-mul2/2+15,y+mul/2-11.25,(mul2-30)/2*progress,-5);
			this.drawImage(img2,x+mul2/2-15,y+mul/2-11.25,-(mul2-30)/2*progress,-5);
			this.drawImage(img2,y-mul/2+11.25,x-mul2/2+15,5,(mul2-30)/2*progress);
			this.drawImage(img2,y-mul/2+11.25,x+mul2/2-15,5,-(mul2-30)/2*progress);
			this.drawImage(img2,y+mul/2-11.25,x-mul2/2+15,-5,(mul2-30)/2*progress);
			this.drawImage(img2,y+mul/2-11.25,x+mul2/2-15,-5,-(mul2-30)/2*progress);
//			this.drawImage(img2,x-mul2/2+15,y-mul/2+11.25,(mul2-30)*progress,5);
//			this.drawImage(img2,x-mul2/2+15,y-mul/2+11.25,(mul2-30)*progress,5);
       //     console.log(this);
			this.drawImage(img1,x-mul2/2,y-mul/2,mul2,mul);
		}
        else{
            this.rarc(x,y,r,a,b);
        }
	}
	prototype.fillText=function(x,y,r,a){
//        if(!map.has(x)){
//            console.log("else if(x=='"+x+"')return '';");
//            map.set(x);
//        }
		this.rfillText(toChinese(x),y,r,a);
//		console.log(x);
	}
	prototype.strokeText=function(x,y,r,a){
		this.rstrokeText(toChinese(x),y,r,a);
	}
}



