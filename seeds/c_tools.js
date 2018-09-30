exports.seed = function (knex, Promise) {
  return knex('tools').del()
    .then(function () {
      return knex('tools').insert([
        {id: 55501, category_id: 77702, name: 'Lawn Mower', description: 'Ryobi 190cc Self-Propelled Yamaha Lawn Mower *Powerful 190cc 4-stroke OHV Yamaha engine *Mulching and side-discharge options *460mm cutting path with adjustable cutting height *4 swing back blades for increased cut and safety', image: '/tool-images/lawn-mower.jpg', active: true},
        {id: 55502, category_id: 77703, name: 'Paint Brush', description: 'Haydn Synthetic Paint Brush *100mm wide *Ergonomically designed beaver tail handle *Suitable for fence painting', image: '/tool-images/paint-brush.jpg', active: true},
        {id: 55503, category_id: 77701, name: 'Sewing Machine', description: 'Brother GS2510 Sewing Machine *25 built in stitches *Built in needle threader *Automatic button hole *LED light *Top load bobbin', image: '/tool-images/sewing-machine.jpg', active: true},
        {id: 55504, category_id: 77704, name: 'Hammer', description: 'Stanley Hammer 565g *Fiberglass shaft absorbs shock and vibration *Textured rubber comfort grip', image: '/tool-images/hammer.jpg', active: true},
        {id: 55505, category_id: 77702, name: 'Garden Hand Tools', description: 'Fiskars Garden Hand Tool Set 3pc *Soft grip', image: '/tool-images/garden-hand-tools.jpg', active: true},
        {id: 55506, category_id: 77702, name: 'Rake', description: 'Saxon Long Handle 14 Tine Garden Rake *Long timber handle *Ideal for raking and clearing soils, leaves and stones ', image: '/tool-images/rake.jpg', active: true},
        {id: 55507, category_id: 77702, name: 'Garden Trolley', description: '60L Garden Trolley *Good volume carrying capacity *Strong *Lightweight', image: '/tool-images/garden-trolley.jpg', active: true},
        {id: 55508, category_id: 77703, name: 'Paint Roller', description: 'Paint Partner Roller Frame & Roller Cover 230mm *Comfortable grip *Sturdy steel frame *Washable and reusable', image: '/tool-images/paint-roller.jpg', active: true},
        {id: 55509, category_id: 77703, name: 'Paint Tray', description: 'Monarch Paint Tray 230mm *Suitable for 230mm paint rollers *Light and sturdy construction *Paint spout for easy pouring *Easy to clean and reusable', image: '/tool-images/paint-tray.jpg', active: true},
        {id: 55510, category_id: 77704, name: 'Screwdrivers', description: 'Fuller Robertson Screwdriver Set 4pc *Non slip grip handles *Set includes: S2x38mm, S1x100mm, S2x100mm, S2x200mm', image: '/tool-images/screwdrivers.jpg', active: true},
        {id: 55511, category_id: 77704, name: 'Sander', description: 'Ryobi 180W Multi Pad Sander *180W motor *Efficient cyclonic micro filtration dust collection *Triangular shaped front base for detail and corner sanding', image: '/tool-images/sander.jpg', active: true},
        {id: 55512, category_id: 77701, name: 'Overlocker', description: 'Singer 14SH654 Finishing Touch Overlocker *Up to 1,300 stitches per minute *Three thread overlock *Conversion from normal over edging to rolled hemming can be accomplished without changing the throat plate', image: '/tool-images/overlocker.jpg', active: true},
        {id: 55513, category_id: 77701, name: 'Needles', description: 'Birch Crewel Needles *Versatile all-purpose needles *Durable and easy to handle', image: '/tool-images/needles.jpg', active: true}
      ])
    })
}
