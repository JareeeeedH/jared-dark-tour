export interface PlayItem {
	title: string;
	desc: string;
	image?: string;
	/** cover：默认裁切；tall：加高区域、横向填满并呈现更多画面 */
	imageFit?: 'cover' | 'tall';
}

export const dayPlay: PlayItem[] = [
	{
		title: '法式殖民風情咖啡廳',
		desc: '百年老建築、頂級滴漏咖啡與雪茄。胡志明紳士午後的經典開場，精選不踩雷的私房店。',
		image: '/hcm_location/hcm_coffee.png',
	},
	{
		title: '中央郵局・西貢郵局',
		desc: '殖民穹頂、復古電話亭與明信片。第一郡經典地標，半日路線一次收齊。',
		image: '/hcm_location/hcm_post.png',
	},
	{
		title: '粉紅教堂 Tan Dinh',
		desc: '蒂芬尼粉磚教堂，第三郡打卡聖地。黃昏光線最佳，適合慢拍與咖啡收尾。',
		image: '/hcm_location/hcm_church.png',
	},
	{
		title: '濱城大市場 Ben Thanh',
		desc: '在地小吃、紀念品與越南咖啡。專人帶路不亂喊價、不強迫消費。',
		image: '/hcm_location/hcm_benThanh.png',
	},
	{
		title: '統一宮（獨立宮）',
		desc: '南越近代史核心展館，地道戰與會議廳。適合第一次來西貢的半日深度。',
		image: '/hcm_location/hcm_depen.png',
	},
	{
		title: '范五老街・西貢文化街',
		desc: '白天逛古董店、咖啡館與地道小館。感受老西貢頹廢美學，為夜晚暖身。',
		image: '/hcm_location/hcm_fanwu.png',
	},
	{
		title: '奧黛・機車街景騎行',
		desc: '穿奧黛搭機車穿梭巷弄，最道地的街景體驗。安全路線、專業司機與保險配套。',
		image: '/hcm_location/hcm_audai.png',
	},
	{
		title: '湄公河三角洲一日遊',
		desc: '水上市集、椰子林、手划船。專車往返、行程不趕，適合排滿一整日。',
		image: '/hcm_location/hcm_mangon.png',
	},
	{
		title: '古芝地道・近郊戰史',
		desc: '地下坑道與叢林戰史體驗。半日或一日可併湄公河，全程控場不趕行程。',
		image: '/hcm_location/tunnel.png',
	},
];

export const nightPlay: PlayItem[] = [
	{
		title: '高空天際線酒吧',
		desc: 'Landmark 81、Bitexco 周邊高空酒廊，俯瞰西貢夜景。適合開場一杯再進主戰場。',
		image: '/hcm_location/hmc_skybar.jpg',
	},
	{
		title: '深夜河景遊船',
		desc: '西貢河晚餐遊船或雞尾酒巡航。燈光河景、氣氛佳，適合團體暖身。',
		image: '/hcm_location/hcm_night_boat.png',
	},
	{
		title: '殘酷選妃奧黛 (初階入門)',
		desc: '百人現場海選、經理防夾單。下午四點起黃金時段，胡志明核心夜戰場。',
		image: '/hcm_location/hcm_night_cherry.png',
	},
	{
		title: 'VVIP KING Barbershop · 越式洗頭(初階入門)',
		desc: '第一郡超人氣帝王洗頭，洗頭、肩頸按摩、掏耳一氣呵成。外客友善，建議排在 KTV 前暖身。',
		image: '/hcm_location/hcm_night_barershop.png',
		imageFit: 'tall',
	},
	{
		title: '更多 中高級大人的玩法',
		desc: 'KTV, 華K, 裸K, 帶出場, 定點全套半套，等各種中高階玩法，等你現場體驗。',
		image: '/hcm_location/girls.png',
	},
];
