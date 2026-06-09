export interface PricingPackage {
	days: string;
	price: string;
	tagline: string;
	highlight?: boolean;
	badge?: string;
}

export interface SoloTravelOption {
	title: string;
	tagline: string;
}

export interface IncludedItem {
	label: string;
	desc: string;
}

export const soloTravelOption: SoloTravelOption = {
	title: '獨旅',
	tagline: '不參團、一人出行，行程天數與深度依你需求量身安排；另行報價。',
};

export const pricingPackages: PricingPackage[] = [
	{
		days: '三天兩夜',
		price: '$11,000',
		tagline: '初次試水，快閃方案',
	},
	{
		days: '四天三夜',
		price: '$13,000',
		tagline: '日光夜晚都安排到位，最均衡的選擇',
		highlight: true,
		badge: '熱門',
	},
	{
		days: '五天四夜',
		price: '$15,000',
		tagline: '慢一點、深一點，把每一夜都玩滿',
	},
];

export const includedItems: IncludedItem[] = [
	{
		label: '行程規劃',
		desc: '行程規劃、客製安排一手包，免動腦。',
	},
	{
		label: '住宿',
		desc: '三星酒店公寓住宿。',
	},
	{
		label: '導遊隨行',
		desc: '控場、翻譯、一次到位。',
	},
	{
		label: '機場接送 + 全程交通',
		desc: '落地到離境，移動全包。',
	},
	{
		label: '快速通關',
		desc: '入境更順，少浪費第一天。',
	},
	{
		label: '精力補給',
		desc: '行程內附補給方案，關鍵時刻活力充沛。',
	},
	{
		label: '全天客服 + 當地辦事處',
		desc: '任何時段、在地應變，安全與保障。',
	},
	{
		label: '高速網卡',
		desc: '落地即連線，地圖、訊息不斷線。',
	},
];
