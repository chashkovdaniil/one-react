export default function handler(req, res) {
    if (req.method != 'POST') {
        // return res.status(400).json({msg: 'Not found'});
        return res.status(404).json();
        // return res.status(404).json({msg: 'Not found'});
    }
    res.status(200).json({msg: "Yeah!"});
}