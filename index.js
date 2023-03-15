// ==UserScript==
// @name Florr Mod
// @namespace Violentmonkey Scripts
// @match https://florr.io/
// @grant none
// @version 1.0
// @author - lexiyvv
// @description 3/5/2023, 3:51:44 PM
// ==/UserScript==
var mul = 80;
var mul2=80;
var img1=document.createElement("img");
img1.src="https://cdn.luogu.com.cn/upload/image_hosting/dqyqb2v9.png";
function toChinese(x){
    if(x=='vvyixel')return 'lexiyvv';
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
	else if(x==='Air')return '一氧化碳';
	else if(x==='Antennae')return '望远镜';
	else if(x==='Basic')return '只因';
	else if(x==='Basil')return '罗勒';
	else if(x==='Bone')return '骨头';
	else if(x==='Bubble')return '';
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
	else if(x==='Yggdrasil')return '世界树';
	else if(x==='Yin Yang')return '阴阳';
	else if(x==='Yucca')return '丝兰';
    else if(x==='Bubble')return '冒泡';
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
    else if(x==='Increases the absorbed XP from petals destroyed during crafting from 2% to 2%.')return '将合成中消耗花瓣被吸收经验的比例从1%提升到2%。                                                            ';
    else if(x==='Increases the absorbed XP from petals destroyed during crafting from 2% to 3%.')return '将合成中消耗花瓣被吸收经验的比例从2%提升到3%。                                                            ';
    else if(x==='Increases the absorbed XP from petals destroyed during crafting from 3% to 4%.')return '将合成中消耗花瓣被吸收经验的比例从3%提升到4%。                                                            ';
    else if(x==='Increases the absorbed XP from petals destroyed during crafting from 4% to 5%.')return '将合成中消耗花瓣被吸收经验的比例从4%提升到5%。                                                            ';
//----------- Descriptions
	else if(x==='Beetle Egg')return '甲虫蛋';
	else if(x==='Ant Egg')return '蚂蚁蛋';
	else if(x==="It's literally nothing.")return '（应该不是毒气吧）什么都没有，垫格子用。 ';
	else if(x==='Allows your flower to sense foes farther away. Does not stack.')return '允许花朵看到远方的生物和掉落的花瓣。此花瓣的效果不能堆叠。   ';
	else if(x==='A nice petal, not too strong but not too weak.')return '一个还行的花瓣，不是很强，也不是很弱。        ';
	else if(x==='Damage: ')return '伤害：     ';
	else if(x==='Health: ')return '血量：  ';
	else if(x==='Increase all healing received.')return '增加回血。';
	else if(x==='Sturdy')return '坚固。';
	else if(x==='Deals extra damage if the victim is above 80% health. -50% damage vs other Flowers.')return '对于血量高于 80% 的怪兽由附加攻击，由于没有 PVP，后面的那句话就不用翻译了吧...';
	else if(x==='A small amount of heal but Fairly consistent.')return '有一点点回血，但是 cd 比较短。';
	else if(x==='Shop')return '商店';
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
		if(r==120){
       //     console.log(this);
			this.drawImage(img1,x-mul2/2,y-mul/2+5,mul2,mul);
		}
        else{
            this.rarc(x,y,r,a,b);
        }
	}
	prototype.fillText=function(x,y,r,a){
		this.rfillText(toChinese(x),y,r,a);
//		console.log(x);
	}
	prototype.strokeText=function(x,y,r,a){
		this.rstrokeText(toChinese(x),y,r,a);
	}
}
