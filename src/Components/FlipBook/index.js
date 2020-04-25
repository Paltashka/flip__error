import React from 'react';
import '../../styles/Kek.scss'
import { connect } from 'react-redux';
import { nextPage, previousPage, getCurrentPage } from '../../reducers/currentPage';

class FlipBook extends React.PureComponent {
    screen = {
        target: null,
        start: null,
        end: null
    }

    state = {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        scroll: 0,
    }

    backSlide = (page) => {
        if (page) {
            page.style.transform = `rotateY(0deg)`
            page.style.zIndex = this.props.children.length - +page.id
        }
    }

    forvardSlide = (page) => {
        if (page) {
            page.style.transform = `rotateY(-180deg)`
            page.style.zIndex = (this.props.children.length - +page.id) + page.id * 2
        }
    }

    slide = (e, screenX) => {
        console.log(e)
        console.log(screenX)
        const page = e.target || e

        if (+page.id === +this.state.currentPage) {
            this.forvardSlide(page, screenX)
        }
        else {
            this.backSlide(page, screenX)
        }
        this.setState({ windowHeight: window.innerHeight })
    }

    forvard = async (index, currentPage) => {
        const i = index + 1
        if (i > currentPage) {
            return
        }
        await new Promise(resolve => setTimeout(resolve, 200))
        this.forvardSlide(this[`page_${i - 1}`])
        this.forvard(i, currentPage)
    }

    back = async (index, currentPage) => {
        const i = index - 1
        if (i < currentPage) {
            return
        }
        await new Promise(resolve => setTimeout(resolve, 200))
        this.backSlide(this[`page_${i}`])
        this.back(i, currentPage)
    }

    // dragLeft = (page, screenX) => {
    //     const rotateY = Math.abs(this.screen.start - screenX) * 180 / this.state.windowWidth
    //     if (rotateY <= 180 && +this.screen.target.id === this.state.currentPage) 
    //         page.style.transform = `rotateY(${-rotateY}deg)`
    // }

    // gragRight = (page, screenX) => {
    //     const rotateY = -180 + (Math.abs(this.screen.start - screenX) * 180 / this.state.windowWidth)
    //     if (rotateY <= 0 && +this.screen.target.id !== this.state.currentPage)
    //         page.style.transform = `rotateY(${rotateY}deg)`
    // }

    // onMouseDown = (e) => {
    //     const screenX = e.screenX || e.targetTouches[0].clientX
    //     this.screen.start = screenX
    //     this.screen.target = e.target

    //     e.target.style.zIndex = (this.props.children.length - +e.target.id) + e.target.id * 2
    //     e.target.style.transition = '0s'

    //     this.containerRef.addEventListener('mousemove', this.onMouseMove)
    //     this.containerRef.addEventListener('touchmove', this.onMouseMove, { passive: true })
    // }

    // onMouseMove = (e) => {
    //     const screenX = e.screenX || e.targetTouches[0].clientX
    //     // console.log(this.screen.start, 'start')
    //     // console.log(screenX, 'X')
    //     this.screen.start > screenX
    //         ? this.dragLeft(this.screen.target, screenX)
    //         : this.gragRight(this.screen.target, screenX)
    // }

    // onMouseUp = (e) => {
    //     try {
    //         const screenX = e.screenX || e.targetTouches[0].clientX
    //         this.screen.target.style.transition = '.5s ease-in'

    //         this.slide(this.screen.target, screenX)
    //         this.screen.target = null
    //     }
    //     catch { }

    //     this.containerRef.removeEventListener('mousemove', this.onMouseMove)
    //     this.containerRef.removeEventListener('touchmove', this.onMouseMove)
    // }

    listenToScroll = () => {
        this.setState({ windowHeight: document.documentElement.scrollHeight })

    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    componentDidUpdate(prevProps) {
        const { currentPage } = this.props
        console.log(currentPage)
        if (prevProps.currentPage < currentPage) {
            this.forvard(prevProps.currentPage, currentPage)
        }
        else {
            this.back(prevProps.currentPage, currentPage)
        }
    }

    render() {
        const { windowWidth, windowHeight, pages } = this.state
        const { children, max, next, previous, currentPage } = this.props
        return (
            <div
                className='book-container'
                ref={container => this.containerRef = container}
                style={{
                    width: windowWidth,
                    height: windowHeight
                }}
            >
                {<button className="button-prev btn" onClick={() => currentPage > 0 && previous()}> &#60; </button>}
                {<button className="button-next btn" onClick={() => currentPage < children.length && next()}> &#62; </button>}
                {
                    children.map((item, index) => {
                        return React.cloneElement(item, {
                            id: index,
                            key: index,
                            next: this.next,
                            onMouseDown: this.onMouseDown,
                            onTouchStart: this.onMouseDown,
                            ref: (page) => this[`page_${index}`] = page,
                            style: {
                                zIndex: children.length - index,
                            }
                        })
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentPage: getCurrentPage(state)
});
const mapMethodsToProps = {
    next: nextPage,
    previous: previousPage
};

export default connect(mapStateToProps, mapMethodsToProps)(FlipBook)