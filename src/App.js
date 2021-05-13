import './App.css';
import Header from './components/Header';
import Main from './components/Main';
// import 'bootstrap/dist/bootstrap.min.css';

var notes=[
  {
    id: 1,
    img: 'https://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp',
    title: 'random',
    description: 'kfdjggnkwjnkgnwjkrngkwnkg',
  }, 

  {
    id: 2,
    img: 'https://th.bing.com/th/id/OIP.kU82RF2cOFqKNmEFwsp_IgHaF7?w=200&h=180&c=7&o=5&dpr=1.25&pid=1.7',
    title: 'random2',
    description: 'kwjnkgnwjkrngkwnkg',
  }, 

  {
    id: 3,
    img: 'https://www.bing.com/images/search?view=detailV2&ccid=adpC%2fVS0&id=8166E17090DCA9AC6AD2AAAC1D9D2A442AEFB8CB&thid=OIP.adpC_VS0bvQw7QZl0VWEMwHaEK&mediaurl=https%3a%2f%2fscx2.b-cdn.net%2fgfx%2fnews%2fhires%2f2019%2f2-nature.jpg&exph=1079&expw=1920&q=nature&simid=607986864627333578&ck=520DB8155432C73F3F5A97CB24EF0582&selectedIndex=18&FORM=IRPRST',
    title: 'random3',
    description: 'relkeelfme'
  }, 

  {
    id: 4,
    img: 'https://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp',
    title: 'random',
    description: 'kfdjggnkwjnkgnwjkrngkwnkg',
  }, 

  {
    id: 5,
    img: 'https://www.bing.com/images/search?view=detailV2&ccid=4P0mAdFe&id=169FF8A318FC3BBD426442684EE5F00548861F16&thid=OIP.4P0mAdFeBA3vO6DjvX8hMAHaE7&mediaurl=https%3a%2f%2fmillion-wallpapers.com%2fwallpapers%2f1%2f85%2f17779089886909635971.jpg&exph=1277&expw=1920&q=nature&simid=608050606228522171&ck=EDACBFBB87186E59EA2444FAA2612115&selectedIndex=10&FORM=IRPRST',
    title: 'random2',
    description: 'kwjnkgnwjkrngkwnkg',
  },

  {
    id: 6,
    img: 'https://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp',
    title: 'random',
    description: 'kfdjggnkwjnkgnwjkrngkwnkg',
  }, 

  {
    id: 7,
    img: 'https://www.bing.com/images/search?view=detailV2&ccid=4P0mAdFe&id=169FF8A318FC3BBD426442684EE5F00548861F16&thid=OIP.4P0mAdFeBA3vO6DjvX8hMAHaE7&mediaurl=https%3a%2f%2fmillion-wallpapers.com%2fwallpapers%2f1%2f85%2f17779089886909635971.jpg&exph=1277&expw=1920&q=nature&simid=608050606228522171&ck=EDACBFBB87186E59EA2444FAA2612115&selectedIndex=10&FORM=IRPRST',
    title: 'random2',
    description: 'kwjnkgnwjkrngkwnkg',
  },

  {
    id: 8,
    img: 'https://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp',
    title: 'random',
    description: 'kfdjggnkwjnkgnwjkrngkwnkg',
  }, 

  {
    id: 9,
    img: 'https://www.bing.com/images/search?view=detailV2&ccid=4P0mAdFe&id=169FF8A318FC3BBD426442684EE5F00548861F16&thid=OIP.4P0mAdFeBA3vO6DjvX8hMAHaE7&mediaurl=https%3a%2f%2fmillion-wallpapers.com%2fwallpapers%2f1%2f85%2f17779089886909635971.jpg&exph=1277&expw=1920&q=nature&simid=608050606228522171&ck=EDACBFBB87186E59EA2444FAA2612115&selectedIndex=10&FORM=IRPRST',
    title: 'random2',
    description: 'kwjnkgnwjkrngkwnkg',
  },

  {
    id: 10,
    img:'https://th.bing.com/th/id/OIP.V0E0Y4DtC9cwbnGRTETSRgHaEK?w=286&h=180&c=7&o=5&dpr=1.25&pid=1.7',
    title: 'random3',
    description: 'random3random3random3random3random3random3random3random3random3random3random3random3random3random3random3random3'
  }
];

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main notes={notes}></Main>
    </div>
  );
}

export default App;
