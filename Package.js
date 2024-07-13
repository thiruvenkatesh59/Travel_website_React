import React from 'react';
import '../style.css'
import image from '../accert/mala.jpeg';
import image1 from '../accert/val.jpeg';
import image2 from '../accert/ooty.jpeg';
import image3 from '../accert/nili.jpeg';
import image4 from '../accert/thi.jpeg';
import image5 from '../accert/com.jpeg';
import image6 from '../accert/muthu.jpeg';
import image7 from '../accert/pan.jpeg';
import image8 from '../accert/mathu.jpeg';
import image9 from '../accert/ram.jpeg';
const Package = () => (
    <section className="package" id="package">
        <div className="pack">
            <div className="grid">
                <div className="d">
                    <div className="items">
                        <img src={image1} alt="valparai" width="100px" height="100px" />
                        <h4>valparai</h4>
                        <center><button>select</button></center>
                    </div>
                </div>
                <div className="d">
                    <div className="items">
                        <img src={image} alt="Mahabalipuram" width="100px" height="100px" />
                        <h4>Mahabalipuram</h4>
                        <center><button>select</button></center>
                    </div>
                </div>
                <div className="d">
                    <div className="items">
                        <img src={image2} alt="ooty" width="100px" height="100px" />
                        <h4>ooty</h4>
                        <center><button>select</button></center>
                    </div>
                </div>
                <div className="d">
                    <div className="items">
                        <img src={image9} alt="Rameswaram" width="100px" height="100px" />
                        <h4>Rameswaram</h4>
                        <center><button>select</button></center>
                    </div>
                </div>
                <div className="d">
                    <div className="items">
                        <img src={image8} alt="Madurai" width="100px" height="100px" />
                        <h4>Madurai</h4>
                        <center><button>select</button></center>
                    </div>
                </div>
                <div className="d">
                    <div className="items">
                        <img src={image7} alt="Puducherry" width="100px" height="100px" />
                        <h4>Puducherry</h4>
                        <center><button>select</button></center>
                    </div>
                </div>
                <div className="d">
                    <div className="items">
                        <img src={image6} alt="Mudumalai" width="100px" height="100px" />
                        <h4>Mudumalai</h4>
                        <center><button>select</button></center>
                    </div>
                </div>
                
                <div className="d">
                    <div className="items">
                        <img src={image3} alt="nilgiris" width="100px" height="100px" />
                        <h4>nilgiris</h4>
                        <center><button>select</button></center>
                    </div>
                </div>
                <div className="d">
                    <div className="items">
                        <img src={image5} alt="Coimbatore" width="100px" height="100px" />
                        <h4>Coimbatore</h4>
                        <center><button>select</button></center>
                    </div>
                </div>
                <div className="d">
                    <div className="items">
                        <img src={image4} alt="Kanniyakumari" width="100px" height="100px" />
                        <h4>Kanniyakumari</h4>
                        <center><button>select</button></center>
                    </div>
                </div>
                            </div>
        </div>
    </section>
);

export default Package;
