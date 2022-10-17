// import MinimumHeader1 from './sample/MinimumHeader1/MinimumHeader1';
import MinimumHeader2 from './sample/MinimumHeader2/MinimumHeader2';

function App() {
  // const menuItems = [
  //   {
  //     name: 'Top',
  //     link: '#',
  //   },
  //   {
  //     name: 'Products',
  //     link: '#',
  //   },
  //   {
  //     name: 'About',
  //     link: '#',
  //   },
  //   {
  //     name: 'Shop List',
  //     link: '#',
  //   },
  //   {
  //     name: 'News',
  //     link: '#',
  //   },
  //   {
  //     name: 'Online Store',
  //     link: '#',
  //   },
  //   {
  //     name: 'FAQ',
  //     link: '#',
  //   },
  // ];
  const menuItems2 = [
    {
      name: 'PRODUCTS',
      link: '#',
    },
    {
      name: 'INSPIRATION',
      link: '#',
    },
    {
      name: 'ABOUT US',
      link: '#',
    },
  ];
  return (
    // <MinimumHeader1 menuItems={menuItems} />
    <MinimumHeader2 menuItems={menuItems2} />
  );
}

export default App;
