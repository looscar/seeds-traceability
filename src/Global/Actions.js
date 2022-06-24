// UUID Generator:
export function UUID() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}


// windowSize
export function windowSize(){
    return (dispatch) => {
        let scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight,document.body.offsetHeight, document.documentElement.offsetHeight,document.body.clientHeight, document.documentElement.clientHeight);
        dispatch({
            type 	: 'MERGE-GLOBAL-STATES',
            payload	: {
                'wsize' : {
                    'w' : window.innerWidth,
                    'h' : scrollHeight,
                },
            },
        });
    };
}


// Show/Hide Side Panel
export function setSidePanel(sidepanel){
    return (dispatch) => {
        dispatch({
            type : 'MERGE-GLOBAL-STATES',
            payload : {
                'sidepanel' : sidepanel,
            }
        });
    }
}


// Show/Hide Modal
export function setModal(modal){
    return (dispatch) => {
        dispatch({
            type : 'MERGE-GLOBAL-STATES',
            payload : {
                'modal' : modal,
            }
        });
    }
}