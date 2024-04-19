import {createSlice} from "@reduxjs/toolkit";

const ReviewsSlice = createSlice({
    name: 'Reviews',
    initialState: {
        title: 'We Provide Many Features You Can Use',
        text: 'You can explore the features that we provide with fun and have their own functions each feature.',
        reviews: [
            {
                userImg: 'https://s3-alpha-sig.figma.com/img/7b52/c50d/64efec4c75c3e34f6408021730b20d9a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRFkzdsoeixoug8V5MCf6qbvK956M0ag-y0VQEyxUsS9AIE8nIjUTLRx09tPWrWqyl1VexjX7l0obKuRiiTdZdLtK~PmoktjWtbm4pzHXGCzMiYrNev9GByqTRBEPOGP5SPI1ZNrN2W7DofV9u3-Pwq3Ut5YfOpomN9B80j6RiWvway9XJxdjMaPsQll2R~g7C7-yHGeiYlJAT~~aGYJxx30HSPZa3jGPNkU9rXkKoWiVNbou6W~7TdAyHS7fSO29AH~e7yLQ7lQEoJWEGC5JIVVJhocAo4rUAG0EJhVQKzFL7bTHvGjV~HiyDkqDdSBkA9-GKxslGEwXiJoCh1qHA__',
                userFullName: 'Viezh Robert',
                userLocation: 'Warsaw, Poland',
                countRating: '4.5',
                title: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far\n' +
                    '            there have been no problems. LaslesVPN always the best”.'
            },
            {
                userImg: 'https://s3-alpha-sig.figma.com/img/4efc/2b65/3098956f84b1822f2eb7e8ed84a31750?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdZCe6AtIBoZc-aOOvwg7MA9iXPAPncYQNzVlpa~qPm4pPqNY6JT9McB72C7CJL68SjvYAqKRYjGvOcUbIz6M-2NRpPL8n8Sjn~HH6CVmBfBBm3MalfpSdJYYac1GJBcWecQI8XXf4AP28MNMptL-7LaWFK8g3oE~ASnLgSGpbDjbCNUGom6Myi9rXyU8mjkKUzK5rpw3C2BeS89njuYxVupfvIFc6o~XzGSzZ7PByAZ~zH4k6HCsthZUQ5Sh9COk1UhR~PikP7zSSX4BXynR90T6aD~esYgpPufoCvFJrVsYgvs4c83spMLKq2decUEARS2VElK69q7f4g371-Yag__',
                userFullName: 'Yessica Christy',
                userLocation: 'Shanxi, China',
                countRating: '4.5',
                title: '“I like it because I like to travel far and still can connect with high speed.”.'
            },
            {
                userImg: 'https://s3-alpha-sig.figma.com/img/b0e0/b9a7/2a3108aed3c607327c6c1eb79c47366c?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y4k8wc8Fdoy0~4pRJ2jvxBXmvSmmOxuTTfqUUBQiNRwJEdbvZ1k9wLsvmBgoFnH5YUfUWcXwvpjG7l8JsPq8J1ADDIXXNAVgEzOzjUYlQGnIlKL9PYBPoDuzlrugVTW1KDmYbMJ7-Y6hjR2A5s27TPaBuNUdzx-6id4HQsPJK6ohkgYPNf0n9GEOm5LcO2DD~zMktmU3puvVMYG7SxanBRco6dPDNj-rR-wML~TgUFWNOrZ2NKtgl10gvUCae-aWGQ8B3nDs3i1osJE9KLn3LHebzUsoPgCvvhW8vu4uapjX~nJPbbJ2GdG~k6Do~cqSzWCzhGhEOUxhVadVVy1wOQ__',
                userFullName: 'Kim Young Jou',
                userLocation: 'Seoul, South Korea',
                countRating: '4.5',
                title: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.'
            },
        ]
    },
    reducer: {}
})

export default ReviewsSlice.reducer