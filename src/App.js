import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';
// import LogIn from './components/LogIn';

const App = ()=> {

    var LoggedIn = true;

    const [notes, setNotes]= useState([
        {
        id: 1,
        img:'', //'https://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp',
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
        },

        {
        id: 11,
        img: 'https://www.bing.com/images/search?view=detailV2&ccid=4P0mAdFe&id=169FF8A318FC3BBD426442684EE5F00548861F16&thid=OIP.4P0mAdFeBA3vO6DjvX8hMAHaE7&mediaurl=https%3a%2f%2fmillion-wallpapers.com%2fwallpapers%2f1%2f85%2f17779089886909635971.jpg&exph=1277&expw=1920&q=nature&simid=608050606228522171&ck=EDACBFBB87186E59EA2444FAA2612115&selectedIndex=10&FORM=IRPRST',
        title: 'random2',
        description: 'kwjnkgnwjkrngkwnkg',
        },

        {
        id: 12,
        img: 'https://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp',
        title: 'random',
        description: 'kfdjggnkwjnkgnwjkrngkwnkg',
        }, 

        {
        id: 13,
        img: 'https://www.bing.com/images/search?view=detailV2&ccid=4P0mAdFe&id=169FF8A318FC3BBD426442684EE5F00548861F16&thid=OIP.4P0mAdFeBA3vO6DjvX8hMAHaE7&mediaurl=https%3a%2f%2fmillion-wallpapers.com%2fwallpapers%2f1%2f85%2f17779089886909635971.jpg&exph=1277&expw=1920&q=nature&simid=608050606228522171&ck=EDACBFBB87186E59EA2444FAA2612115&selectedIndex=10&FORM=IRPRST',
        title: 'random2',
        description: 'kwjnkgnwjkrngkwnkg',
        },
    ]);

    const addNewNote = (note)=>{
        const nt = {id: notes[notes.length-1].id + 1, ...note};
        setNotes([...notes, nt])
    }

    const deleteNote = (id)=>{
        setNotes(notes.filter((note) => note.id!==id));
    }

  const searchAndMark = (toBeSearched) => {
    // alert(toBeSearched);

    function getIndicesOf(searchStr, str, caseSensitive)
    {
        var searchStrLen = searchStr.length;
        if (searchStrLen === 0) {
            return [];
        }
        var startIndex = 0, index, indices = [];
        if (!caseSensitive) {
            str = str.toLowerCase();
            searchStr = searchStr.toLowerCase();
        }
        while ((index = str.indexOf(searchStr, startIndex)) > -1) {
            indices.push(index);
            startIndex = index + searchStrLen;
        }
        return indices;
    }

    var temp_note = [];
    // alert(notes.length);
    for(var i=0; i<notes.length;i++)
    {
        // alert('doing');
        var note = notes[i];
        var title_present = note.title.includes(toBeSearched);
        var description_present = note.description.includes(toBeSearched);

        if (title_present||description_present)
        {
            var indexs = 0;
            var pre_index =0;
            var index;
            if (title_present)
            {
                var title = '';
                indexs = getIndicesOf(toBeSearched, note['title']);
                pre_index =0;
                index=0;
                for (var ind in indexs)
                {
                    index = indexs[ind];
                    if ((pre_index)===index)
                        title += ' ';
                    title += note['title'].substring(pre_index, index) + '<mark style="background-color:yellow">' + toBeSearched +'</mark>';        
                    pre_index = index + toBeSearched.length;
                            
                }
                title += note['title'].substring(pre_index);
                note['title'] = title
            }
            
            if (description_present)
            {
                var description = '';
                indexs = getIndicesOf(toBeSearched, note['description']);
                pre_index =0;
                index=0;
                for (ind in indexs)
                {
                    index = indexs[ind];
                    if ((pre_index)===index)
                        description += ' ';
                    description += note['description'].substring(pre_index, index) + '<mark style="background-color:yellow">' + toBeSearched +'</mark>';        
                    pre_index = index + toBeSearched.length;
                            
                }
                description += note['description'].substring(pre_index);
                note['description'] = description
            }
            temp_note.push(note);
            console.log(note);
        }


    }
        console.log(temp_note);
        setNotes(temp_note);
        // alert('hi');
      
    }

    const Decision = (props) => {
        if (props.LoggedIn){
        return (
            <div className="App">
            <Header searchAndMark={searchAndMark}></Header>
            <Main notes={notes} addNewNote={addNewNote} onDelete={deleteNote}></Main>
            </div>
        );
        }
    // else{
    //   return (<LogIn/>);
    // }
  }


    return (
        <Decision LoggedIn={LoggedIn}/>
    );
}

export default App;
