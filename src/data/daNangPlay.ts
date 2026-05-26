export interface PlayItem {
	title: string;
	desc: string;
	image?: string;
	imageFit?: 'cover' | 'tall';
}

export const dayPlay: PlayItem[] = [
	{
		title: '美溪沙灘・晨昏海岸',
		desc: '被譽為越南最美沙灘之一，晨跑、夕陽與海景咖啡。節奏慢、適合紳士度假開場。',
		image: '/da_location/da_beach.png',
	},
	{
		title: '巴拿山・天空之城',
		desc: '纜車、法式村與 Golden Bridge 佛手橋。一日行程，建議平日避開人潮。',
		image: '/da_location/da_Bana.png',
	},
	{
		title: '會安古鎮・燈籠老街',
		desc: '世界遺產古鎮、日式橋與河畔咖啡。專車隱密接送，可排半日或搭配裁縫體驗。',
		image: '/da_location/da_lanter.png',
	},
];

export const nightPlay: PlayItem[] = [
	{
		title: '龍橋週末・噴火夜景',
		desc: '週末夜龍橋噴火、噴水秀，河畔散步與小吃。峴港最 iconic 的免費夜景。',
		image: '/da_location/da_dragon.png',
	},
	{
		title: '山茶夜市（Son Tra Night Market）',
		desc: '峴港在地人愛逛的夜市，海鮮、燒烤與越南小吃選擇多。氣氛熱鬧，專人帶路挑新鮮、不亂喊價。',
		image: '/da_location/da_market.png',
	},
	{
		title: '峴港高端 KTV',
		desc: '多間 KTV 可選，安排專屬陪同服務與帳單由我們把關。比胡志明節奏慢，適合兄弟團慢慢玩。',
		image: '/da_location/da_night_ktv.png',
	},
];
