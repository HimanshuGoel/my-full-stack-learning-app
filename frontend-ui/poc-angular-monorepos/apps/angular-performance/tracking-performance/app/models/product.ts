import { Category } from './category';

export interface Product {
  image?: string;
  thumb?: string;
  title: string;
  price: number;
  description: string;
  tags: string[];
  category: Category;
  id: string;
  quantity?: number;
}

const products: Product[] = [
  {
      title: 'Cat Collar',
      id: 'ACC001',
      price: 12.99,
      description: 'Adjustable collar for cats with bell and tag holder.',
      quantity: 15,
      category: Category.CLOTHES,
      tags: ['adjustable', 'bell', 'tag holder', 'cat accessory']
  },
  {
      title: 'Dog Chew Toy',
      id: 'ACC002',
      price: 8.75,
      description: 'Durable chew toy for dogs of all sizes.',
      quantity: 20,
      category: Category.CLOTHES,
      tags: ['durable', 'chew toy', 'dog accessory']
  },
  {
      title: 'Bird Perch',
      id: 'ACC003',
      price: 6.50,
      description: 'Natural wood perch for small to medium-sized birds.',
      quantity: 12,
      category: Category.CLOTHES,
      tags: ['natural wood', 'perch', 'bird accessory']
  },
  {
      title: 'Ferret Tunnel',
      id: 'ACC004',
      price: 19.25,
      description: 'Tunnel toy for ferrets to play and hide in.',
      quantity: 8,
      category: Category.CLOTHES,
      tags: ['tunnel toy', 'ferret accessory']
  },
  {
    title: 'Cat Scratching Post',
    id: 'ACC005',
    price: 29.99,
    description: 'Large scratching post for cats with multiple scratching surfaces.',
    quantity: 18,
    category: Category.CLOTHES,
    tags: ['scratching post', 'cat accessory', 'large']
},
{
    title: 'Dog Bandana',
    id: 'ACC006',
    price: 7.99,
    description: 'Stylish bandana for dogs in various patterns.',
    quantity: 14,
    category: Category.CLOTHES,
    tags: ['bandana', 'dog accessory', 'stylish']
},
{
    title: 'Parrot Swing',
    id: 'ACC007',
    price: 15.50,
    description: 'Colorful swing for parrots to perch and play.',
    quantity: 10,
    category: Category.CLOTHES,
    tags: ['parrot', 'swing', 'colorful', 'bird accessory']
},
{
    title: 'Ferret Hammock',
    id: 'ACC008',
    price: 18.75,
    description: 'Cozy hammock for ferrets to relax and sleep in.',
    quantity: 6,
    category: Category.CLOTHES,
    tags: ['hammock', 'ferret accessory', 'cozy']
},
{
    title: 'Cat Toy Set',
    id: 'ACC009',
    price: 14.25,
    description: 'Set of interactive toys for cats including balls and feather teasers.',
    quantity: 22,
    category: Category.CLOTHES,
    tags: ['toy set', 'cat accessory', 'interactive', 'balls', 'feathers']
},
{
    title: 'Dog Raincoat',
    id: 'ACC010',
    price: 24.99,
    description: 'Waterproof raincoat for dogs with adjustable straps.',
    quantity: 5,
    category: Category.CLOTHES,
    tags: ['raincoat', 'dog accessory', 'waterproof', 'adjustable']
},
{
    title: 'Bird Ladder',
    id: 'ACC011',
    price: 9.50,
    description: 'Wooden ladder for birds to climb and exercise.',
    quantity: 17,
    category: Category.CLOTHES,
    tags: ['bird ladder', 'wooden', 'exercise']
},
{
  title: 'Cat Bed',
  id: 'ACC012',
  price: 39.99,
  description: 'Soft and plush bed for cats with removable cushion.',
  quantity: 10,
  category: Category.CLOTHES,
  tags: ['cat bed', 'soft', 'plush', 'removable cushion']
},
{
  title: 'Dog Cooling Mat',
  id: 'ACC013',
  price: 32.50,
  description: 'Gel-filled cooling mat for dogs to keep cool in hot weather.',
  quantity: 15,
  category: Category.CLOTHES,
  tags: ['cooling mat', 'dog accessory', 'gel-filled']
},
{
  title: 'Bird Cage',
  id: 'ACC014',
  price: 79.99,
  description: 'Large cage for birds with multiple perches and feeding dishes.',
  quantity: 8,
  category: Category.CLOTHES,
  tags: ['bird cage', 'large', 'perches', 'feeding dishes']
},
{
  title: 'Ferret Ball Pit',
  id: 'ACC015',
  price: 17.75,
  description: 'Colorful ball pit for ferrets to play and hide in.',
  quantity: 12,
  category: Category.CLOTHES,
  tags: ['ball pit', 'ferret accessory', 'colorful']
},
{
  title: 'Cat Grooming Brush',
  id: 'ACC016',
  price: 11.25,
  description: 'Soft-bristled brush for grooming cats with comfort grip handle.',
  quantity: 20,
  category: Category.CLOTHES,
  tags: ['grooming brush', 'cat accessory', 'soft-bristled', 'comfort grip']
},
{
  title: 'Dog Treat Pouch',
  id: 'ACC017',
  price: 14.99,
  description: 'Convenient pouch for carrying dog treats with adjustable belt clip.',
  quantity: 18,
  category: Category.CLOTHES,
  tags: ['treat pouch', 'dog accessory', 'convenient', 'adjustable clip']
},
{
  title: 'Bird Swing',
  id: 'ACC018',
  price: 8.50,
  description: 'Wooden swing for birds to perch and swing.',
  quantity: 25,
  category: Category.CLOTHES,
  tags: ['bird swing', 'wooden', 'perch']
},
{
  title: 'Ferret Bedding Set',
  id: 'ACC019',
  price: 27.95,
  description: 'Set of bedding for ferrets including fleece blankets and cushioned mats.',
  quantity: 6,
  category: Category.CLOTHES,
  tags: ['bedding set', 'ferret accessory', 'fleece blankets', 'cushioned mats']
},
{
  title: 'Cat Tunnel',
  id: 'ACC020',
  price: 19.50,
  description: 'Collapsible tunnel for cats to play and explore.',
  quantity: 14,
  category: Category.CLOTHES,
  tags: ['cat tunnel', 'collapsible', 'play', 'explore']
},
{
  title: 'Dog Safety Vest',
  id: 'ACC021',
  price: 29.75,
  description: 'Reflective safety vest for dogs during night walks or hikes.',
  quantity: 9,
  category: Category.CLOTHES,
  tags: ['safety vest', 'dog accessory', 'reflective', 'night walks']
},
{
  title: 'Cat Scratcher Lounge',
  id: 'ACC022',
  price: 45.99,
  description: 'Durable cardboard cat scratcher lounge with catnip included.',
  quantity: 7,
  category: Category.CLOTHES,
  tags: ['scratcher', 'cat lounge', 'cardboard', 'catnip']
},
{
  title: 'Dog Frisbee',
  id: 'ACC023',
  price: 6.25,
  description: 'Floating and durable frisbee for dogs to play fetch.',
  quantity: 22,
  category: Category.CLOTHES,
  tags: ['frisbee', 'dog toy', 'floating', 'durable']
},
{
  title: 'Bird Bath',
  id: 'ACC024',
  price: 12.99,
  description: 'Small bird bath with perch for bathing and drinking.',
  quantity: 15,
  category: Category.CLOTHES,
  tags: ['bird bath', 'small', 'perch', 'bathing']
},
{
  title: 'Ferret Harness and Leash Set',
  id: 'ACC025',
  price: 19.50,
  description: 'Adjustable harness and leash set for ferrets with quick-release buckle.',
  quantity: 10,
  category: Category.CLOTHES,
  tags: ['harness', 'leash set', 'ferret accessory', 'adjustable', 'quick-release buckle']
},
{
  title: 'Cat Dental Chews',
  id: 'ACC026',
  price: 8.99,
  description: 'Dental chews for cats to promote oral health and reduce tartar buildup.',
  quantity: 18,
  category: Category.CLOTHES,
  tags: ['dental chews', 'cat accessory', 'oral health', 'tartar buildup']
},
{
  title: 'Dog Puzzle Toy',
  id: 'ACC027',
  price: 15.75,
  description: 'Interactive puzzle toy for dogs to stimulate mental activity.',
  quantity: 12,
  category: Category.CLOTHES,
  tags: ['puzzle toy', 'dog toy', 'interactive', 'mental stimulation']
},
{
  title: 'Bird Toy Set',
  id: 'ACC028',
  price: 11.50,
  description: 'Assortment of toys for birds including bells and ropes.',
  quantity: 20,
  category: Category.CLOTHES,
  tags: ['toy set', 'bird accessory', 'bells', 'ropes']
},
{
  title: 'Ferret Hideout',
  id: 'ACC029',
  price: 24.95,
  description: 'Cozy hideout for ferrets with soft interior and removable roof.',
  quantity: 8,
  category: Category.CLOTHES,
  tags: ['hideout', 'ferret accessory', 'cozy', 'removable roof']
},
{
  title: 'Cat Water Fountain',
  id: 'ACC030',
  price: 34.99,
  description: 'Water fountain for cats with circulating water and multiple drinking levels.',
  quantity: 5,
  category: Category.CLOTHES,
  tags: ['water fountain', 'cat accessory', 'circulating water', 'drinking levels']
},
{
  title: 'Dog Backpack',
  id: 'ACC031',
  price: 28.50,
  description: 'Adjustable backpack for dogs to carry essentials during outdoor adventures.',
  quantity: 9,
  category: Category.CLOTHES,
  tags: ['backpack', 'dog accessory', 'adjustable', 'outdoor adventures']
},
{
  title: 'Horse Grooming Kit',
  id: 'ACC032',
  price: 54.99,
  description: 'Complete grooming kit for horses including brushes, curry comb, and hoof pick.',
  quantity: 10,
  category: Category.HORSES,
  tags: ['grooming kit', 'horse accessory', 'brushes', 'hoof pick']
},
{
  title: 'Pig Harness',
  id: 'ACC033',
  price: 19.50,
  description: 'Adjustable harness for pigs with sturdy buckles and comfortable fit.',
  quantity: 15,
  category: Category.PIGS,
  tags: ['harness', 'pig accessory', 'adjustable', 'buckles']
},
{
  title: 'Horse Fly Mask',
  id: 'ACC034',
  price: 32.75,
  description: 'Protective fly mask for horses with mesh design to keep insects away.',
  quantity: 8,
  category: Category.HORSES,
  tags: ['fly mask', 'horse accessory', 'protective', 'mesh design']
},
{
  title: 'Pig Waterer',
  id: 'ACC035',
  price: 24.99,
  description: 'Automatic waterer for pigs with large capacity and adjustable flow.',
  quantity: 12,
  category: Category.PIGS,
  tags: ['waterer', 'pig accessory', 'automatic', 'adjustable flow']
},
{
  title: 'Horse Hay Net',
  id: 'ACC036',
  price: 12.25,
  description: 'Durable hay net for horses to slow down eating and reduce waste.',
  quantity: 18,
  category: Category.HORSES,
  tags: ['hay net', 'horse accessory', 'durable', 'reduce waste']
},
{
  title: 'Pig Enrichment Ball',
  id: 'ACC037',
  price: 8.50,
  description: 'Interactive enrichment ball for pigs to play and exercise.',
  quantity: 20,
  category: Category.PIGS,
  tags: ['enrichment ball', 'pig accessory', 'interactive', 'exercise']
},
{
  title: 'Horse Tail Bag',
  id: 'ACC038',
  price: 17.99,
  description: 'Protective tail bag for horses to keep tail clean and protected.',
  quantity: 14,
  category: Category.HORSES,
  tags: ['tail bag', 'horse accessory', 'protective', 'clean']
},
{
  title: 'Pig House',
  id: 'ACC039',
  price: 89.95,
  description: 'Sturdy house for pigs with insulated walls and waterproof roof.',
  quantity: 6,
  category: Category.PIGS,
  tags: ['pig house', 'sturdy', 'insulated', 'waterproof']
},
{
  title: 'Horse Hoof Oil',
  id: 'ACC040',
  price: 9.75,
  description: 'Nourishing hoof oil for horses to promote healthy hooves and prevent cracking.',
  quantity: 10,
  category: Category.HORSES,
  tags: ['hoof oil', 'horse accessory', 'nourishing', 'prevent cracking']
},
{
  title: 'Pig Bedding',
  id: 'ACC041',
  price: 14.50,
  description: 'Soft bedding for pigs made from recycled materials.',
  quantity: 15,
  category: Category.PIGS,
  tags: ['bedding', 'pig accessory', 'soft', 'recycled materials']
},
{
  title: 'Aquarium Heater',
  id: 'ACC042',
  price: 28.99,
  description: 'Submersible heater for aquariums with adjustable temperature settings.',
  quantity: 10,
  category: Category.FISH,
  tags: ['aquarium heater', 'submersible', 'adjustable temperature']
},
{
  title: 'Fish Food Pellets',
  id: 'ACC043',
  price: 9.50,
  description: 'Nutritious pellets for fish with essential vitamins and minerals.',
  quantity: 15,
  category: Category.FISH,
  tags: ['fish food', 'pellets', 'nutritious', 'vitamins', 'minerals']
},
{
  title: 'Aquarium Filter',
  id: 'ACC044',
  price: 34.75,
  description: 'Powerful filter for aquariums with multi-stage filtration system.',
  quantity: 8,
  category: Category.FISH,
  tags: ['aquarium filter', 'powerful', 'multi-stage filtration']
},
{
  title: 'Fish Tank Decorations',
  id: 'ACC045',
  price: 17.99,
  description: 'Assortment of decorations for fish tanks including plants and ornaments.',
  quantity: 12,
  category: Category.FISH,
  tags: ['tank decorations', 'fish accessories', 'plants', 'ornaments']
},
{
  title: 'Aquarium LED Light',
  id: 'ACC046',
  price: 42.50,
  description: 'Energy-efficient LED light for aquariums with adjustable brightness.',
  quantity: 18,
  category: Category.FISH,
  tags: ['aquarium LED light', 'energy-efficient', 'adjustable brightness']
},
{
  title: 'Fish Net',
  id: 'ACC047',
  price: 6.99,
  description: 'Durable net for safely catching and transferring fish in aquariums.',
  quantity: 20,
  category: Category.FISH,
  tags: ['fish net', 'durable', 'catching', 'transferring']
},
{
  title: 'Aquarium Air Pump',
  id: 'ACC048',
  price: 22.25,
  description: 'Quiet air pump for aquariums providing essential oxygenation.',
  quantity: 14,
  category: Category.FISH,
  tags: ['aquarium air pump', 'quiet', 'oxygenation']
},
{
  title: 'Fish Tank Gravel Cleaner',
  id: 'ACC049',
  price: 12.95,
  description: 'Gravel cleaner for fish tanks to remove debris and maintain water quality.',
  quantity: 8,
  category: Category.FISH,
  tags: ['gravel cleaner', 'fish tank accessory', 'debris removal', 'water quality']
},
{
  title: 'Aquarium Thermometer',
  id: 'ACC050',
  price: 8.75,
  description: 'Accurate thermometer for aquariums to monitor water temperature.',
  quantity: 10,
  category: Category.FISH,
  tags: ['aquarium thermometer', 'accurate', 'water temperature']
},
{
  title: 'Fish Medication',
  id: 'ACC051',
  price: 15.99,
  description: 'Medication for treating common fish diseases and infections.',
  quantity: 12,
  category: Category.FISH,
  tags: ['fish medication', 'treatment', 'diseases', 'infections']
},
{
  title: 'Premium Dog Food',
  price: 34.56,
  description: 'A high-quality dog food made with natural ingredients.',
  tags: ['natural', 'dog', 'food'],
  category: Category.Food,
  id: '1',
  quantity: 47,
},
{
  title: 'Cat Scratching Post',
  price: 45.67,
  description: 'Durable scratching post for cats.',
  tags: ['cat', 'scratching', 'toy'],
  category: Category.Toys,
  id: '2',
  quantity: 29,
},
{
  title: 'Fish Tank Cleaner',
  price: 18.34,
  description: 'Efficient cleaner for fish tanks.',
  tags: ['fish', 'cleaner', 'aquarium'],
  category: Category.Accessories,
  id: '3',
  quantity: 64,
},
{
  title: 'Bird Cage',
  price: 132.45,
  description: 'Spacious and comfortable bird cage.',
  tags: ['bird', 'cage', 'accessory'],
  category: Category.Accessories,
  id: '4',
  quantity: 52,
},
{
  title: 'Rabbit Hutch',
  price: 177.89,
  description: 'Outdoor hutch for rabbits.',
  tags: ['rabbit', 'hutch', 'home'],
  category: Category.Accessories,
  id: '5',
  quantity: 23,
},
{
  title: 'Dog Grooming Kit',
  price: 36.78,
  description: 'Complete grooming kit for dogs.',
  tags: ['dog', 'grooming', 'kit'],
  category: Category.Grooming,
  id: '6',
  quantity: 80,
},
{
  title: 'Cat Litter Box',
  price: 27.45,
  description: 'Easy to clean litter box for cats.',
  tags: ['cat', 'litter', 'box'],
  category: Category.Accessories,
  id: '7',
  quantity: 34,
},
{
  title: 'Hamster Wheel',
  price: 15.67,
  description: 'Safe and silent wheel for hamsters.',
  tags: ['hamster', 'wheel', 'toy'],
  category: Category.Toys,
  id: '8',
  quantity: 67,
},
{
  title: 'Parrot Toy Set',
  price: 23.56,
  description: 'Interactive toy set for parrots.',
  tags: ['parrot', 'toy', 'set'],
  category: Category.Toys,
  id: '9',
  quantity: 49,
},
{
  title: 'Reptile Heat Lamp',
  price: 42.34,
  description: 'Heat lamp for reptile enclosures.',
  tags: ['reptile', 'heat', 'lamp'],
  category: Category.Accessories,
  id: '10',
  quantity: 88,
},
{
  title: 'Lizard Heat Mat',
  price: 25.99,
  description: 'Heat mat to provide warmth for lizards.',
  tags: ['lizard', 'heat', 'mat'],
  category: Category.Accessories,
  id: '11',
  quantity: 50,
},
{
  title: 'Frog Terrarium',
  price: 78.45,
  description: 'Spacious terrarium designed for frogs.',
  tags: ['frog', 'terrarium', 'home'],
  category: Category.Accessories,
  id: '12',
  quantity: 22,
},
{
  title: 'Lizard Food Mix',
  price: 14.29,
  description: 'Nutritious food mix for lizards.',
  tags: ['lizard', 'food', 'mix'],
  category: Category.Food,
  id: '13',
  quantity: 73,
},
{
  title: 'Frog Water Conditioner',
  price: 8.99,
  description: 'Conditioner to ensure safe water for frogs.',
  tags: ['frog', 'water', 'conditioner'],
  category: Category.Accessories,
  id: '14',
  quantity: 67,
},
{
  title: 'Lizard Climbing Branch',
  price: 15.49,
  description: 'Natural climbing branch for lizards.',
  tags: ['lizard', 'climbing', 'branch'],
  category: Category.Accessories,
  id: '15',
  quantity: 48,
},
{
  title: 'Frog Habitat Decor',
  price: 12.99,
  description: 'Decorative items for frog habitats.',
  tags: ['frog', 'habitat', 'decor'],
  category: Category.Accessories,
  id: '16',
  quantity: 55,
},
{
  title: 'Lizard UVB Lamp',
  price: 35.67,
  description: 'UVB lamp for lizard enclosures.',
  tags: ['lizard', 'UVB', 'lamp'],
  category: Category.Accessories,
  id: '17',
  quantity: 38,
},
{
  title: 'Frog Food Pellets',
  price: 10.79,
  description: 'High-protein food pellets for frogs.',
  tags: ['frog', 'food', 'pellets'],
  category: Category.Food,
  id: '18',
  quantity: 90,
},
{
  title: 'Lizard Habitat Kit',
  price: 120.45,
  description: 'Complete habitat kit for lizards.',
  tags: ['lizard', 'habitat', 'kit'],
  category: Category.Accessories,
  id: '19',
  quantity: 15,
},
{
  title: 'Frog Misting System',
  price: 45.99,
  description: 'Automated misting system for frogs.',
  tags: ['frog', 'misting', 'system'],
  category: Category.Accessories,
  id: '20',
  quantity: 24,
},
{
  title: 'Lizard Hiding Cave',
  price: 19.35,
  description: 'Natural hiding cave for lizards.',
  tags: ['lizard', 'hiding', 'cave'],
  category: Category.Accessories,
  id: '21',
  quantity: 45,
},
{
  title: 'Frog Sun Lamp',
  price: 32.99,
  description: 'Sun lamp to provide UV light for frogs.',
  tags: ['frog', 'sun', 'lamp'],
  category: Category.Accessories,
  id: '22',
  quantity: 37,
},
{
  title: 'Lizard Vitamin Supplements',
  price: 11.49,
  description: 'Vitamin supplements for lizards.',
  tags: ['lizard', 'vitamin', 'supplements'],
  category: Category.Food,
  id: '23',
  quantity: 58,
},
{
  title: 'Frog Feeding Tongs',
  price: 9.99,
  description: 'Stainless steel feeding tongs for frogs.',
  tags: ['frog', 'feeding', 'tongs'],
  category: Category.Accessories,
  id: '24',
  quantity: 76,
},
{
  title: 'Lizard Habitat Thermometer',
  price: 16.75,
  description: 'Digital thermometer for lizard habitats.',
  tags: ['lizard', 'habitat', 'thermometer'],
  category: Category.Accessories,
  id: '25',
  quantity: 39,
},
{
  title: 'Frog Bioactive Substrate',
  price: 13.89,
  description: 'Bioactive substrate for frog enclosures.',
  tags: ['frog', 'bioactive', 'substrate'],
  category: Category.Accessories,
  id: '26',
  quantity: 61,
},
{
  title: 'Lizard Insect Feeder',
  price: 27.45,
  description: 'Automatic insect feeder for lizards.',
  tags: ['lizard', 'insect', 'feeder'],
  category: Category.Accessories,
  id: '27',
  quantity: 28,
},
{
  title: 'Frog Breeding Box',
  price: 22.99,
  description: 'Breeding box designed for frogs.',
  tags: ['frog', 'breeding', 'box'],
  category: Category.Accessories,
  id: '28',
  quantity: 33,
},
{
  title: 'Lizard Calcium Powder',
  price: 9.89,
  description: 'Calcium powder to support lizard health.',
  tags: ['lizard', 'calcium', 'powder'],
  category: Category.Food,
  id: '29',
  quantity: 72,
},
{
  title: 'Frog Heat Rock',
  price: 18.59,
  description: 'Heat rock to provide warmth for frogs.',
  tags: ['frog', 'heat', 'rock'],
  category: Category.Accessories,
  id: '30',
  quantity: 49,
},
{
  title: 'Pig Bedding',
  price: 22.49,
  description: 'Soft and absorbent bedding for pigs.',
  tags: ['pig', 'bedding', 'comfortable'],
  category: Category.Accessories,
  id: '31',
  quantity: 50,
},
{
  title: 'Pig Feed',
  price: 18.75,
  description: 'Nutrient-rich feed formulated for pigs.',
  tags: ['pig', 'feed', 'nutritious'],
  category: Category.Food,
  id: '32',
  quantity: 65,
},
{
  title: 'Piglet Milk Replacer',
  price: 25.99,
  description: 'Milk replacer designed for piglets.',
  tags: ['piglet', 'milk', 'replacer'],
  category: Category.Food,
  id: '33',
  quantity: 42,
},
{
  title: 'Pig Grooming Brush',
  price: 14.29,
  description: 'Soft-bristled brush for grooming pigs.',
  tags: ['pig', 'grooming', 'brush'],
  category: Category.Grooming,
  id: '34',
  quantity: 78,
},
{
  title: 'Pig Waterer',
  price: 32.59,
  description: 'Automatic waterer to keep pigs hydrated.',
  tags: ['pig', 'waterer', 'automatic'],
  category: Category.Accessories,
  id: '35',
  quantity: 29,
},
{
  title: 'Pig Snout Wipes',
  price: 10.99,
  description: 'Gentle wipes for cleaning pig snouts.',
  tags: ['pig', 'snout', 'wipes'],
  category: Category.Grooming,
  id: '36',
  quantity: 56,
},
{
  title: 'Pig Play Ball',
  price: 15.49,
  description: 'Durable ball for pigs to play with.',
  tags: ['pig', 'play', 'ball'],
  category: Category.Toys,
  id: '37',
  quantity: 34,
},
{
  title: 'Pig Treats',
  price: 9.75,
  description: 'Delicious treats made for pigs.',
  tags: ['pig', 'treats', 'delicious'],
  category: Category.Food,
  id: '38',
  quantity: 92,
},
{
  title: 'Pig Hoof Trimmer',
  price: 19.99,
  description: 'Tool for trimming pig hooves.',
  tags: ['pig', 'hoof', 'trimmer'],
  category: Category.Grooming,
  id: '39',
  quantity: 40,
},
{
  title: 'Pig House',
  price: 145.99,
  description: 'Spacious and comfortable house for pigs.',
  tags: ['pig', 'house', 'spacious'],
  category: Category.Accessories,
  id: '40',
  quantity: 12,
},
{
  title: 'Pig Blanket',
  price: 25.45,
  description: 'Warm and cozy blanket for pigs.',
  tags: ['pig', 'blanket', 'cozy'],
  category: Category.Accessories,
  id: '41',
  quantity: 58,
},
{
  title: 'Pig Ear Cleaner',
  price: 8.49,
  description: 'Gentle ear cleaner for pigs.',
  tags: ['pig', 'ear', 'cleaner'],
  category: Category.Grooming,
  id: '42',
  quantity: 61,
},
{
  title: 'Pig Toy Set',
  price: 23.99,
  description: 'Set of toys designed for pigs.',
  tags: ['pig', 'toy', 'set'],
  category: Category.Toys,
  id: '43',
  quantity: 45,
},
{
  title: 'Pig Feeder',
  price: 35.75,
  description: 'Automatic feeder for pigs.',
  tags: ['pig', 'feeder', 'automatic'],
  category: Category.Accessories,
  id: '44',
  quantity: 27,
},
{
  title: 'Pig Mineral Supplement',
  price: 12.89,
  description: 'Essential mineral supplement for pigs.',
  tags: ['pig', 'mineral', 'supplement'],
  category: Category.Food,
  id: '45',
  quantity: 70,
},
{
  title: 'Pig Activity Mat',
  price: 30.59,
  description: 'Interactive activity mat for pigs.',
  tags: ['pig', 'activity', 'mat'],
  category: Category.Toys,
  id: '46',
  quantity: 36,
},
{
  title: 'Pig Shampoo',
  price: 11.29,
  description: 'Gentle shampoo for pigs.',
  tags: ['pig', 'shampoo', 'gentle'],
  category: Category.Grooming,
  id: '47',
  quantity: 77,
},
{
  title: 'Pig Hay Rack',
  price: 22.99,
  description: 'Hay rack to keep hay clean and accessible.',
  tags: ['pig', 'hay', 'rack'],
  category: Category.Accessories,
  id: '48',
  quantity: 48,
},
{
  title: 'Pig Outdoor Run',
  price: 89.99,
  description: 'Secure outdoor run for pigs.',
  tags: ['pig', 'outdoor', 'run'],
  category: Category.Accessories,
  id: '49',
  quantity: 20,
},
{
  title: 'Pig Digestive Aid',
  price: 15.75,
  description: 'Digestive aid to support pig health.',
  tags: ['pig', 'digestive', 'aid'],
  category: Category.Food,
  id: '50',
  quantity: 63,
},
{
  title: 'Chinchilla Dust Bath',
  price: 12.99,
  description: 'Special dust for chinchilla baths.',
  tags: ['chinchilla', 'dust', 'bath'],
  category: Category.Grooming,
  id: '51',
  quantity: 40,
},
{
  title: 'Chinchilla Pellets',
  price: 18.49,
  description: 'Nutritious pellets formulated for chinchillas.',
  tags: ['chinchilla', 'pellets', 'food'],
  category: Category.Food,
  id: '52',
  quantity: 70,
},
{
  title: 'Chinchilla Hay Feeder',
  price: 22.79,
  description: 'Hay feeder to keep hay clean and accessible.',
  tags: ['chinchilla', 'hay', 'feeder'],
  category: Category.Accessories,
  id: '53',
  quantity: 35,
},
{
  title: 'Chinchilla Exercise Wheel',
  price: 29.99,
  description: 'Safe and sturdy exercise wheel for chinchillas.',
  tags: ['chinchilla', 'exercise', 'wheel'],
  category: Category.Toys,
  id: '54',
  quantity: 25,
},
{
  title: 'Chinchilla Cage',
  price: 149.99,
  description: 'Spacious cage for chinchillas.',
  tags: ['chinchilla', 'cage', 'home'],
  category: Category.Accessories,
  id: '55',
  quantity: 12,
},
{
  title: 'Chinchilla Hideout',
  price: 19.99,
  description: 'Comfortable hideout for chinchillas.',
  tags: ['chinchilla', 'hideout', 'accessory'],
  category: Category.Accessories,
  id: '56',
  quantity: 50,
},
{
  title: 'Chinchilla Chew Toys',
  price: 14.49,
  description: 'Durable chew toys for chinchillas.',
  tags: ['chinchilla', 'chew', 'toys'],
  category: Category.Toys,
  id: '57',
  quantity: 60,
},
{
  title: 'Chinchilla Food Bowl',
  price: 8.99,
  description: 'Sturdy food bowl for chinchillas.',
  tags: ['chinchilla', 'food', 'bowl'],
  category: Category.Accessories,
  id: '58',
  quantity: 80,
},
{
  title: 'Chinchilla Treats',
  price: 10.49,
  description: 'Tasty treats made for chinchillas.',
  tags: ['chinchilla', 'treats', 'food'],
  category: Category.Food,
  id: '59',
  quantity: 75,
},
{
  title: 'Chinchilla Water Bottle',
  price: 12.99,
  description: 'Leak-proof water bottle for chinchillas.',
  tags: ['chinchilla', 'water', 'bottle'],
  category: Category.Accessories,
  id: '60',
  quantity: 45,
},
{
  title: 'Chinchilla Climbing Toys',
  price: 21.49,
  description: 'Interactive climbing toys for chinchillas.',
  tags: ['chinchilla', 'climbing', 'toys'],
  category: Category.Toys,
  id: '61',
  quantity: 38,
},
{
  title: 'Chinchilla Bedding',
  price: 17.89,
  description: 'Soft and absorbent bedding for chinchillas.',
  tags: ['chinchilla', 'bedding', 'comfortable'],
  category: Category.Accessories,
  id: '62',
  quantity: 52,
},
{
  title: 'Chinchilla House',
  price: 34.99,
  description: 'Wooden house for chinchillas to rest.',
  tags: ['chinchilla', 'house', 'wooden'],
  category: Category.Accessories,
  id: '63',
  quantity: 22,
},
{
  title: 'Chinchilla Travel Carrier',
  price: 45.99,
  description: 'Portable carrier for traveling with chinchillas.',
  tags: ['chinchilla', 'travel', 'carrier'],
  category: Category.Accessories,
  id: '64',
  quantity: 28,
},
{
  title: 'Chinchilla Nail Clippers',
  price: 9.99,
  description: 'Nail clippers designed for chinchillas.',
  tags: ['chinchilla', 'nail', 'clippers'],
  category: Category.Grooming,
  id: '65',
  quantity: 70,
},
{
  title: 'Chinchilla Cooling Pad',
  price: 24.49,
  description: 'Cooling pad to keep chinchillas comfortable.',
  tags: ['chinchilla', 'cooling', 'pad'],
  category: Category.Accessories,
  id: '66',
  quantity: 33,
},
{
  title: 'Chinchilla Vitamin C Supplement',
  price: 11.99,
  description: 'Vitamin C supplement for chinchillas.',
  tags: ['chinchilla', 'vitamin C', 'supplement'],
  category: Category.Food,
  id: '67',
  quantity: 55,
},
{
  title: 'Chinchilla Hammock',
  price: 18.79,
  description: 'Comfortable hammock for chinchillas.',
  tags: ['chinchilla', 'hammock', 'comfortable'],
  category: Category.Accessories,
  id: '68',
  quantity: 46,
},
{
  title: 'Chinchilla Playpen',
  price: 32.99,
  description: 'Portable playpen for chinchillas.',
  tags: ['chinchilla', 'playpen', 'portable'],
  category: Category.Accessories,
  id: '69',
  quantity: 37,
},
{
  title: 'Chinchilla Dust House',
  price: 27.49,
  description: 'Enclosed house for chinchilla dust baths.',
  tags: ['chinchilla', 'dust', 'house'],
  category: Category.Grooming,
  id: '70',
  quantity: 30,
}
];
