import $ from "jquery";


const OpenBrowser = ()=>{

    const windowWork = () =>{
        var win_width = $(window).width();
        var win_height = $(window).height();
        var w = Math.floor(win_width*0.3);

        window.open('localhost', '', "left=" + 0 +", width=" + w + ", height=" + win_height+", top=0");
        window.open('https://www.google.com','', "left=" + (w+7) +", width=" + (win_width-w-7) + ", height=" + win_height+", top=0");

    }

    return (
        <div className="btn btn-secondary p-2 rounded-lg m-b-2" style={{width:"40%", position:"fixed", left:"30%",
        zIndex:"1", bottom:"0"}} onClick={windowWork}>
            <div className="mx-auto text-light" style={{width:"fit-content"}}>Split Screen</div>
        </div>
    );
}

export default OpenBrowser;