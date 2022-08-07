export default async function poduct(req, res) {
    const query = req.query;
    const { name } = query;

    async function getSpeciesList(code) {
        let token = '9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee'
        let url = 'https://apiv3.iucnredlist.org/api/v3/country/getspecies/' + code + '?token=' + token;
        console.log(url)
        const res = await fetch(url)
        const list = await res.json()
        return list.result
    }
    /* export default function handler(req, res) {
      const test = getList('IN')
      res.status(200).json({ test })
    } */
    const result = await getSpeciesList(name)  // country input here
    try {
        const final = result.filter(obj => {
            return obj.category === 'NT'
        })
        res.status(200).json({ final })
    } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
    }
}