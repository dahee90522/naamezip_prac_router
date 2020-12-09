import React from 'react';
import './footer.css';

function footer(){
    return(
        <div className="footercontainer">
            <div className="footertopcontainer">
                <ul>
                    <li>남의집 소식</li>
                    <li>이용 가이드</li>
                    <li>채용</li>
                    <li>이용약관</li>
                    <li>개인정보 처리방침</li>
                </ul>
                <div className="footersnscontainer">
                    <a href = "#">
                        <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAzCAYAAABmK3MOAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAG6ADAAQAAAABAAAAMwAAAAAkdhIGAAAB8ElEQVRYCe1YPUvDUBQ1SSepqDjpkMVN3AUHP8DFQXGw4OAfcG6bSSSLUEi3Sv+Ho5sK/QFuIoJSEFwqCC0ora3nhVx4bfM+asob5AXKvbkf57x3uEkedWb+eJVKpQ207uHH7Cp+K47jLMDS1RwMBk3Eflig1+vtO5TRtQlJBSA7uj2srtPpzLkTNDjlcvkc9Y1JiYgjR47KgqiCmgBEqlJhXmtnkO6AEQlRNBNKskKh4GE3V5p40jIlme/7p0DwpSiaSSWZ67onmljKMp0B2VKioADP1DMWFvX7/ae0+nq93paSFYvFNTTOpjXzMRDd5PP5ozAMv/j4qC+VEStdHG0Q3J+piFiflAz5eQE4H/6sVqsvfEDkS8kgjydqpDhq2uSrrJQMMipfF3gGlQuiRUjJqGha1pJNRUn2jboVIWHSljAA66I8F7/j/DEXOPd4PC7YG2R7LJsEJvh2CTESqAdmjQwIFv1qkix+wxjZGU5W5si63e6jERkxiR+1Wu3bCBlIYgmNk+WwzV3GmnZhZDcRv0zLcbEWMI65+yEXGG8UkH5CgiA4BNA1FQvsexRFy4LcUNjI6BOjJSMlMlkrYyb5qNnKSEpkslbGTPJRs5WRlMhkrYyZ5KPm/yuj9E8Xz/MaODoLj3qJPPFpl6SS2V8GvHFKHV7ipAAAAABJRU5ErkJggg=="/>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default footer;