import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/closetag'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
import 'codemirror/theme/material.css'
import React, { useState } from 'react'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { connect } from 'react-redux'
import { updateCode } from '../actions/code'


const Code = (props) => {
  const {
    language,
    displayName,
    value,
    onChange,
    color,
    pro,
    updateCodeCreator,
    q
  } = props
  const [open, setOpen] = useState(true)

  function handleChange(editor, data, value) {
    onChange(value)
    
  }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title" style={{ color, fontWeight: 650 }}>
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"  
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true,
          autoCloseBrackets: true,
          autoCloseTags: true,
          autoFormat: true,
          autoCorrect: true,
        }}
      />
    </div>
  )
}

const mapActionsToProps = ({
  updateCodeCreator: updateCode,
})

export default connect(null, mapActionsToProps)(Code)


