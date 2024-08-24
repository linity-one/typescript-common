this is how the input works

    import Label from '@/common/ui/label';'
    import Input from '@/common/ui/Input';
    import InputWrapper from '@/common/ui/InputWrapper';
    import InputSubtext from '@/common/ui/InputSubtext';
    import Button from '@/common/ui/Button';

    export default function Page() {
    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value == 'ok') {
    e.target.setCustomValidity('');
    } else {
    e.target.setCustomValidity('Please select ok');
    }
    }

    return (
    <main>
    <form
    className="w-1/3 py-10 shadow-600 mx-auto px-10 mt-10"
    onSubmit={(e) => e.preventDefault()}
    >
    <InputWrapper>
    <Input disabled={true} onChange={onChange} placeholder="whatever" />
    <Label>test</Label>
    <InputSubtext variant="standard">
    this is the information
    </InputSubtext>
    <InputSubtext variant="error">this is the error text</InputSubtext>
    </InputWrapper>
    <Button type={'submit'}>test</Button>
    </form>
    </main>
    );
    }
