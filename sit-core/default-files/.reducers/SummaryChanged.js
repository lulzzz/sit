function(state, record) {
    if (typeof record.files[".type/SummaryChanged"] !== 'undefined') {
        var decoder = new TextDecoder("utf-8");
        return Object.assign(state, {
            authors: state.authors || decoder.decode(record.files[".authors"]),
            summary: decoder.decode(record.files.text).trim()
        });
    } else {
        return state;
    }
}