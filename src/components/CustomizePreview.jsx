import '../styles/CustomizePreview.css';

export default function Customize({enabled, settings, setSettings})
{

    function changeStyle(event){
        const form = event.target;
    
        const key = {} ;
        key[form.name] = form.value;

        setSettings(prevObj => {
            return {
                ...prevObj,
                ...key
            }
        });
    }

    if(enabled)
    {
        return (
            <div className="customize">
                <div className="customize-header">
                    <h1>Customize</h1>
                </div>
                <div className="customize-body">
                    
                    <form action="#" onChange={changeStyle}>
    
                        <div className="wrap-color">
                            <div className="wrapper">
                                <p>Main color</p>
                                <input type="color"
                                        id="mainColor"
                                        name="mainColor"
                                        value={settings.mainColor}
                                />
                            </div>
                            
                            <div className="wrapper">
                                <p>Secondary color</p>
                                <input type="color"
                                        id="secondaryColor"
                                        name="secondaryColor"
                                        value={settings.secondaryColor}
                                />
                            </div>
                                <div className="wrapper">
                                    <p>Ternary color</p>
                                    <input type="color"
                                            id="ternaryColor"
                                            name="ternaryColor"
                                            value={settings.ternaryColor}
                                    />
                                </div>
                        </div>

                            <div className="wrap-fonts">
                                <div className="wrapper">
                                    <p>Title text color</p>
                                    <input type="color"
                                            id="fontTitleColor"
                                            name="fontTitleColor"
                                            value={settings.fontTitleColor}
                                    />
                                </div>
                                <div className="wrapper">
                                    <p>Text color</p>
                                    <input type="color"
                                            id="fontTextColor"
                                            name="fontTextColor"
                                            value={settings.fontTextColor}
                                    />
                                </div>
                                <div className="wrapper">
                                    <p>Sub text color</p>
                                    <input type="color"
                                            id="fontSubTextColor"
                                            name="fontSubTextColor"
                                            value={settings.fontSubTextColor}
                                    />
                                </div>
                            </div>

    
                    </form>
                    
                    
                </div>
            </div>
        )
    }
    
}