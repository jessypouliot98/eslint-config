module.exports = {
    plugins: [
        'simple-import-sort',
    ],
    rules: {
        ['simple-import-sort/imports']: ['error', { groups: [
            [
                '^\\u0000',
                '^react([-\\w]*)?',
                '^@?\\w',
            ],
            [
                './store$',
                './store/[\\w_-]/reducer(s)$',
                './store/[\\w_-]/selector(s)$',
                './store/[\\w_-]/type(s)$',
                './store/.*$',
            ],
            [
                './hook(s)$',
                './hook(s)/.*$',

                './util(s)$',
                './util(s)/.*$',
            ],
            [
                './component(s)$',
                './component(s)/.*$',

                './part(s)$',
                './part(s)/.*$',

                './view(s)$',
                './view(s)/.*$',
            ],
        ] }]
    }
};
