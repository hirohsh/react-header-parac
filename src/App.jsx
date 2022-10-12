import MinimumHeader1 from './sample/MinimumHeader1/MinimumHeader1';

function App() {
  const menuItems = [
    {
      name: 'Top',
      link: '#',
    },
    {
      name: 'Products',
      link: '#',
    },
    {
      name: 'About',
      link: '#',
    },
    {
      name: 'Shop List',
      link: '#',
    },
    {
      name: 'News',
      link: '#',
    },
    {
      name: 'Online Store',
      link: '#',
    },
    {
      name: 'FAQ',
      link: '#',
    },
  ];
  return <MinimumHeader1 menuItems={menuItems} />;
}

export default App;
