import React from 'react';
import '../../styles/Kek.scss'

class FlipBook extends React.Component {
    screen = {
        target: null,
        start: null,
        end: null
    }

    state = {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        currentPage: 0
    }

    backSlide = (page, screenX) => {
        if (this.screen.start > screenX)
            return
        page.style.transform = `rotateY(0deg)`
        page.style.zIndex = this.props.children.length - +page.id
        this.setState({ currentPage: this.state.currentPage - 1 })
    }

    forvardSlide = (page, screenX) => {
        if (this.screen.start < screenX)
            return
        page.style.transform = `rotateY(-180deg)`
        page.style.zIndex = (this.props.children.length - +page.id) + page.id * 2
        this.setState({ currentPage: this.state.currentPage + 1 })
    }

    slide = (e, screenX) => {
        const page = e.target || e

        if (+page.id === +this.state.currentPage) {
            this.forvardSlide(page, screenX)
        }
        else {
            this.backSlide(page, screenX)
        }
    }

    dragLeft = (page, screenX) => {
        const rotateY = Math.abs(this.screen.start - screenX) * 180 / this.state.windowWidth
        if (rotateY <= 180 && +this.screen.target.id === this.state.currentPage) 
            page.style.transform = `rotateY(${-rotateY}deg)`
    }

    gragRight = (page, screenX) => {
        const rotateY = -180 + (Math.abs(this.screen.start - screenX) * 180 / this.state.windowWidth)
        if (rotateY <= 0 && +this.screen.target.id !== this.state.currentPage)
            page.style.transform = `rotateY(${rotateY}deg)`
    }

    onMouseDown = (e) => {
        const screenX = e.screenX || e.targetTouches[0].clientX
        this.screen.start = screenX
        this.screen.target = e.target

        e.target.style.zIndex = (this.props.children.length - +e.target.id) + e.target.id * 2
        e.target.style.transition = '0s'

        this.containerRef.addEventListener('mousemove', this.onMouseMove)
        this.containerRef.addEventListener('touchmove', this.onMouseMove, { passive: true })
    }

    onMouseMove = (e) => {
        const screenX = e.screenX || e.targetTouches[0].clientX
        this.screen.start > screenX
            ? this.dragLeft(this.screen.target, screenX)
            : this.gragRight(this.screen.target, screenX)
    }

    onMouseUp = (e) => {
        try {
            const screenX = e.screenX || e.targetTouches[0].clientX
            this.screen.target.style.transition = '.5s ease-in'

            this.slide(this.screen.target, screenX)
            this.screen.target = null
        }
        catch { }

        this.containerRef.removeEventListener('mousemove', this.onMouseMove)
        this.containerRef.removeEventListener('touchmove', this.onMouseMove)
    }

    componentDidMount() {
        this.containerRef.addEventListener('mouseup', this.onMouseUp)
        this.containerRef.addEventListener('touchend', this.onMouseUp, { passive: true })
    }

    render() {
        const { windowWidth, windowHeight, pages } = this.state
        const { children } = this.props

        return (
            <div className="book-container"
                ref={container => this.containerRef = container}
                style={{
                    width: windowWidth,
                    height: windowHeight
                }}
            >
                {
                    children.map((item, index) => {
                        return React.cloneElement(item, {
                            id: index,
                            key: index,
                            onMouseDown: this.onMouseDown,
                            onTouchStart: this.onMouseDown,
                            style: {
                                zIndex: children.length - index,
                                // left: windowWidth / 2
                            }
                        })
                    })
                }
            </div>
        )
    }
}

export default FlipBook