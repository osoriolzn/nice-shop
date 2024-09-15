import Card from '../../components/card'
import Layout from '../../components/layout'
import itemsToRender from '../../mocks/products.json'

function Home() {
  const renderView = () => {
    if (itemsToRender.length > 0) {
      return itemsToRender.map(item => (
        <Card key={item.id} data={item} />
      ))
    }
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-2'>
        <h1 className='font-medium text-xl'>Descubre Tu Estilo</h1>
      </div>

      <input
        id='search'
        name='search'
        // value={search}
        // onChange={(event) => setSearch(event.target.value)}
        className='rounded-lg border border-black w-80 p-2 mb-4'
        type='text'
        placeholder='White Gold, SanDisk...'
      />

      <div className='grid grid-cols-3 gap-3 w-full max-w-screen-lg'>
        {renderView()}
      </div>

    </Layout>
  )
}

export default Home
