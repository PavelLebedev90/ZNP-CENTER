import React from 'react';

type SvgInputType = {
    setOpen: (value:boolean)=>void
    setModalIsOpen: (value:boolean)=>void
    clearInput: ()=>void
    open: boolean
}

const SvgInput = ({setOpen, setModalIsOpen, clearInput, open}:SvgInputType) => {
    return (
        <div className="wrapper-svg">
            <svg className="arrow"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"
                 onClick={() => setOpen(!open)}
            >
                <path
                    d="M18.5303 9.46967C18.8232 9.76256 18.8232
                     10.2374 18.5303 10.5303L12.5303 16.5303C12.2374
                      16.8232 11.7626 16.8232 11.4697 16.5303L5.46967
                       10.5303C5.17678 10.2374 5.17678 9.76256 5.46967
                        9.46967C5.76256 9.17678 6.23744 9.17678 6.53033
                         9.46967L12 14.9393L17.4697 9.46967C17.7626 9.17678
                          18.2374 9.17678 18.5303 9.46967Z"/>
            </svg>
            <span className="arrowAfter">
                </span>
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="list"
                 viewBox="0 0 490 490"
                 onClick={() => setModalIsOpen(true)}>
                <path d="M404.465,23.677h-53.131V0H330.03v23.677h-74.378V0h-21.304v23.677h-74.373V0h-21.304v23.677H85.535
	c-5.883,0-10.652,4.769-10.652,10.652v445.019c0,5.883,4.769,10.652,10.652,10.652h318.93c5.883,0,10.652-4.769,10.652-10.652
	V34.329C415.117,28.446,410.348,23.677,404.465,23.677z M138.671,44.981v23.681h21.304V44.981h74.373v23.681h21.304V44.981h74.378
	v23.681h21.304V44.981h42.479v74.914H96.187V44.981H138.671z M96.187,468.696V141.199h297.626v327.497H96.187z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="clearInput"
                 onClick={clearInput}
                 viewBox="0 0 247.574 247.574">
                <path d="M123.787,0.001C55.53,0.001,0,55.531,0,123.787s55.53,123.786,123.787,123.786s123.787-55.53,123.787-123.786
		S192.044,0.001,123.787,0.001z M123.787,232.573C63.802,232.573,15,183.772,15,123.787S63.802,15.001,123.787,15.001
		s108.787,48.801,108.787,108.786S183.773,232.573,123.787,232.573z"/>
                <path d="M133.047,123.786l42.316-58.429c2.43-3.355,1.68-8.044-1.675-10.474c-3.356-2.429-8.043-1.68-10.474,1.675L123.787,111
		l-39.43-54.441c-2.43-3.356-7.12-4.105-10.474-1.675c-3.354,2.43-4.104,7.119-1.675,10.474l42.317,58.429l-42.317,58.43
		c-2.43,3.355-1.68,8.044,1.675,10.474c1.33,0.963,2.868,1.426,4.394,1.426c2.322,0,4.613-1.076,6.08-3.101l39.43-54.442
		l39.43,54.442c1.467,2.025,3.757,3.101,6.08,3.101c1.525,0,3.064-0.463,4.393-1.426c3.355-2.43,4.105-7.119,1.675-10.474
		L133.047,123.786z"/>
            </svg>
        </div>
    );
};

export default SvgInput;
