import React from 'react'
import { None, BW, Sharp } from './svg/WindowThemes'
import { COLORS } from '../lib/constants'

const WINDOW_THEMES_MAP = { none: None, sharp: Sharp, bw: BW }
export const WINDOW_THEMES = Object.keys(WINDOW_THEMES_MAP)

class ThemeSelect extends React.Component {
  select = theme => {
    if (this.props.selected !== theme) {
      this.props.onChange(theme)
    }
  }

  renderThemes() {
    return WINDOW_THEMES.map(theme => {
      const Img = WINDOW_THEMES_MAP[theme]
      return (
        <div
          role="button"
          tabIndex={0}
          className={`theme ${this.props.selected === theme ? 'selected' : ''}`}
          key={theme}
          onClick={this.select.bind(null, theme)}
        >
          <Img />
          <style jsx>
            {`
              .theme {
                cursor: pointer;
                margin-right: 8px;
              }

              .theme:last-of-type {
                margin-right: 0px;
              }

              .selected :global(svg) {
                border-radius: 3px;
                border: solid 2px ${COLORS.SECONDARY};
              }
            `}
          </style>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="window-theme">
        <span className="label">Theme</span>
        <div className="themes">{this.renderThemes()}</div>
        <style jsx>
          {`
            .window-theme {
              padding: 8px;
            }

            .window-theme span {
              display: inline-block;
              margin-bottom: 8px;
            }

            .themes {
              display: flex;
              flex-direction: row;
              width: 100%;
            }
          `}
        </style>
      </div>
    )
  }
}

export default ThemeSelect
