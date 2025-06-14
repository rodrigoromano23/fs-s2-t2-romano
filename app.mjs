import mongoose from 'mongoose';

// Conexión a MongoDB
mongoose.connect('mongodb+srv://Grupo-16:grupo16@cursadanodejs.ls9ii.mongodb.net/Node-js')
  .then(() => console.log(' Conexión exitosa a MongoDB'))
  .catch(error => console.error(' Error al conectar a MongoDB:', error));

// Esquema del superhéroe
const superheroSchema = new mongoose.Schema({
  nombreSuperheroe: { type: String, required: true },
  nombreReal: { type: String, required: true },
  edad: { type: Number, min: 0 },
  planetaOrigen: { type: String, default: 'Desconocido' },
  debilidad: String,
  poderes: [String],
  aliados: [String],
  enemigos: [String],
  createdAt: { type: Date, default: Date.now },
  creador: String
}, { collection: 'Grupo-16' });

// 
const SuperHero = mongoose.model('SuperHero', superheroSchema);

// INSERTAR LISTA DE SUPERHÉROES
async function insertSuperheroes() {
  const heroes = [
    {
      nombreSuperheroe: 'Spiderman',
      nombreReal: 'Peter Parker',
      edad: 25,
      planetaOrigen: 'Tierra',
      debilidad: 'Radioactiva',
      poderes: ['Trepar paredes', 'Sentido arácnido', 'Super fuerza', 'Agilidad'],
      aliados: ['Ironman'],
      enemigos: ['Duende Verde'],
      creador: 'Martin'
    },
    {
      nombreSuperheroe: 'Batman',
      nombreReal: 'Bruce Wayne',
      edad: 35,
      planetaOrigen: 'Tierra',
      debilidad: 'Humano sin poderes',
      poderes: ['Inteligencia', 'Tecnología avanzada', 'Combate cuerpo a cuerpo'],
      aliados: ['Robin', 'Alfred'],
      enemigos: ['Joker'],
      creador: 'Lucía'
    },
    {
      nombreSuperheroe: 'Thor',
      nombreReal: 'Thor Odinson',
      edad: 1500,
      planetaOrigen: 'Asgard',
      debilidad: 'Arrogancia',
      poderes: ['Control del trueno', 'Fuerza sobrehumana', 'Vuelo'],
      aliados: ['Loki', 'Avengers'],
      enemigos: ['Hela'],
      creador: 'Carlos'
    },
    {
      nombreSuperheroe: 'Shadow Pulse',
      nombreReal: 'Liam Cross',
      edad: 32,
      planetaOrigen: 'Nocturnia',
      debilidad: 'Luz intensa',
      poderes: ['Manipulación de sombras', 'Invisibilidad', 'Teletransportación corta'],
      aliados: ['Night Veil', 'Eclipse'],
      enemigos: ['Solaris Prime'],
      creador: 'Cascada1'
    },
    {
      nombreSuperheroe: 'Myltra',
      nombreReal: 'Serena Virtul',
      edad: 120,
      planetaOrigen: 'Arnia',
      debilidad: 'Acido puro',
      poderes: ['Magia elemental', 'Vuelo', 'Curación mágica'],
      aliados: ['Guardianes del Orbe'],
      enemigos: ['El Gris'],
      creador: 'Cachu'
    },
    {
      nombreSuperheroe: 'Titanore',
      nombreReal: 'K-470O',
      edad: 37,
      planetaOrigen: 'Catartox-9',
      debilidad: 'Ataques sonoros',
      poderes: ['Fuerza sobrehumana', 'Cañón de plasma', 'Análisis de combate en tiempo real'],
      aliados: ['Unidad Omega'],
      enemigos: ['Aritium'],
      creador: 'Rodrigo'
    }
  ];

  await SuperHero.insertMany(heroes);
  console.log(' Superhéroes  insertados:', heroes);
}

// ACTUALIZAR
async function updateSuperHero(nombreSuperheroe) {
  const result = await SuperHero.updateOne(
    { nombreSuperheroe },
    { $set: { edad: 26 } }
  );
  console.log(' Resultado de la actualización:', result);
}

// ELIMINAR
async function deleteSuperHero(nombreSuperheroe) {
  const result = await SuperHero.deleteOne({ nombreSuperheroe });
  console.log(' Superhéroe eliminado:', result);
}
 // Borra todos los superhéroes existentes
  await SuperHero.deleteMany({});
  console.log('🧹 Superhéroes anteriores eliminados.');

// BUSCAR
async function findSuperHeroes() {
  const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' });
  console.log(' Superhéroes encontrados (planeta: Tierra):', heroes);
}

// el orden CRUD
async function ejecutarCRUD() {
  await insertSuperheroes();             
  await updateSuperHero('Shadow Pulse');   
  await deleteSuperHero('Shadow Pulse');   
  await findSuperHeroes();              
}

ejecutarCRUD();
