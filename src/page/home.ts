class Home {
	template() {
		return `
        <div>home입니다</div>
        <button data-navi="/about">go to about</button>
        `;
	}
}

export default new Home();
